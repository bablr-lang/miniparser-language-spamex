import * as regex from '@bablr/miniparser-language-nonbacktracking-js-regex';

const escapeString = (str) => str.replace(/['\\]/g, '\\$&');

const Arguments = (p, node) => {
  if (node.args?.length) {
    p.print('{ ');
    let first = true;
    for (const arg of node.args) {
      if (!first) p.print(', ');
      p.eatProduction(arg);
      first = false;
    }
    p.print(' }');
  }
};

export class SpamexMiniprinterGrammar {
  TokenMatcher(p, node) {
    const { attrs = [], args = [] } = node;
    p.print('<| ');
    p.print(node.tagType);
    if (node.value) {
      p.print(' ');
      p.eatProduction(node.value);
    }
    for (const attr of attrs) {
      p.print(' ');
      p.eatProduction(attr);
    }
    if (args.length) {
      p.print(' ');
      Arguments(p, node);
    }
    p.print(' |>');
  }

  NodeMatcher(p, node) {
    const { attrs = [], args = [] } = node;
    p.print('<');
    p.print(node.tagType);
    for (const attr of attrs) {
      p.print(' ');
      p.eatProduction(attr);
    }
    if (args.length) {
      p.print(' ');
      Arguments(p, node);
    }
    p.print('>');
  }

  StringMatcher(p, node) {
    p.print(`'`);
    p.print(escapeString(node.value));
    p.print(`'`);
  }

  RegexMatcher(p, node) {
    p.pushLanguage(regex);
    p.print('/');
    p.eatProduction(node.pattern);
    p.print('/');
    if (node.global) p.print('g');
    if (node.ignoreCase) p.print('i');
    if (node.multiline) p.print('m');
    if (node.dotAll) p.print('s');
    if (node.unicode) p.print('u');
    p.popLanguage();
  }

  AttributeMatcher(p, node) {
    p.print(node.key);
    p.print('=');
    p.print(`'`);
    p.print(node.value);
    p.print(`'`);
  }

  Argument(p, node) {
    p.print(node.key);
    p.print(': ');
    p.eatProduction(node.value);
  }
}
