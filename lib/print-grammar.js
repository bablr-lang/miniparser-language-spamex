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
  TokenTag(p, node) {
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

  NodeTag(p, node) {
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

  String(p, node) {
    p.print(`'`);
    p.print(escapeString(node.value));
    p.print(`'`);
  }

  Regex(p, node) {
    p.pushLanguage(regex);
    p.eatProduction(node.value);
    p.popLanguage();
  }

  Attribute(p, node) {
    p.print(node.key);
    p.print('=');
    p.print(node.value);
  }

  Argument(p, node) {
    p.print(node.key);
    p.print(': ');
    p.eatProduction(node.value);
  }
}
