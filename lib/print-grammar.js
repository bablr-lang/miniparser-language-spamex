import * as regex from '@bablr/miniparser-language-nonbacktracking-js-regex';

const escapeString = (str) => str.replace(/['\\]/g, '\\$&');

export class MatchableMiniprinterGrammar {
  TokenGapTag(p, node) {
    p.print('<| ');
    p.eatProduction(node.tagType);
    if (node.value) {
      p.print(' ');
      p.eatProduction(node.value);
    }
    if (node.attrs) {
      p.print(' ');
      p.eatProduction(node.attrs);
    }
    p.print(' |>');
  }

  NodeGapTag(p, node) {
    p.print('<');
    p.eatProduction(node.tagType);
    if (node.attrs) {
      p.print(' ');
      p.eatProduction(node.attrs);
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
    p.eatProduction(node.value);
  }
}
