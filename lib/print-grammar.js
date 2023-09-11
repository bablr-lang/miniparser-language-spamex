import * as regex from '@bablr/miniparser-language-nonbacktracking-js-regex';

const escapeString = (str) => str.replace(/['\\]/g, '\\$&');

export class SpamexMiniprinterGrammar {
  TokenMatcher(p, { node }) {
    p.print('<| ');
    p.eatProduction({ path: 'tagName' });
    if (node.value) {
      p.print(' ');
      p.eatProduction({ path: 'value' });
    }
    p.eatProduction('AttributeMatchers');
    if (node.args?.length) {
      p.print(' ');
      p.eatProduction('Arguments');
    }
    p.print(' |>');
  }

  NodeMatcher(p, { node }) {
    p.print('<');
    p.eatProduction({ path: 'tagName' });
    p.eatProduction('AttributeMatchers');
    if (node.args?.length) {
      p.print(' ');
      p.eatProduction('Arguments');
    }
    p.print('>');
  }

  StringMatcher(p, { node }) {
    p.print(`'`);
    p.print(escapeString(node.value));
    p.print(`'`);
  }

  RegexMatcher(p, { node }) {
    p.pushLanguage(regex);
    p.print('/');
    p.eatProduction({ path: 'pattern' });
    p.print('/');
    if (node.global) p.print('g');
    if (node.ignoreCase) p.print('i');
    if (node.multiline) p.print('m');
    if (node.dotAll) p.print('s');
    if (node.unicode) p.print('u');
    p.popLanguage();
  }

  AttributeMatchers(p, { node }) {
    const { attrs = [] } = node;

    for (const attr of attrs) {
      p.print(' ');
      p.eatProduction('AttributeMatcher', { path: 'attrs' });
    }
  }

  AttributeMatcher(p, { node }) {
    p.print(node.key);
    p.print('=');
    p.print(`'`);
    p.print(node.value);
    p.print(`'`);
  }

  Arguments(p, { node }) {
    if (node.args?.length) {
      p.print('{ ');
      let first = true;
      for (const arg of node.args) {
        if (!first) p.print(', ');
        // needs a resolver to work
        p.eatProduction('Argument', { path: 'args' });
        first = false;
      }
      p.print(' }');
    }
  }

  Argument(p, { node }) {
    p.print(node.key);
    p.print(': ');
    p.eatProduction({ path: 'value' });
  }

  Identifier(p, path) {
    const { node, parent } = path;
    const { language } = node;

    const shortOK =
      parent &&
      // aliases.get('TokenMatcher').has(parent.type) &&
      path.parentProperty === 'tagName' &&
      parent.parent?.node.tagType.language === language;

    if (shortOK) {
      p.print(node.production);
    } else {
      p.print(node.language);
      p.print(':');
      p.print(node.production);
    }
  }
}
