import * as regex from '@bablr/miniparser-language-nonbacktracking-js-regex';

const escapeString = (str) => str.replace(/['\\]/g, '\\$&');

export class MatchableMiniprinterGrammar {
  TokenGapTag(p) {
    p.print('<| ');
    p.eatProduction(p.node.type);
    if (p.node.value) {
      p.print(' ');
      p.eatProduction(p.node.value);
    }
    if (p.node.attrs) {
      p.print(' ');
      p.eatProduction(p.node.attrs);
    }
    p.print(' |>');
  }

  NodeGapTag(p) {
    p.print('<');
    p.eatProduction(p.node.type);
    if (p.node.attrs) {
      p.print(' ');
      p.eatProduction(p.node.attrs);
    }
    p.print('>');
  }

  String(p) {
    p.print(`'`);
    p.print(escapeString(p.node.value));
    p.print(`'`);
  }

  Regex(p) {
    p.pushLanguage(regex);
    p.eatProduction(p.node.value);
    p.popLanguage();
  }

  Attribute(p) {
    p.print(p.node.key);
    p.print('=');
    p.eatProduction(p.node.value);
  }
}
