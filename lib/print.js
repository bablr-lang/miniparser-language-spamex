import { Grammar, productions } from '@bablr/grammar';
import { miniprinterGrammar as regexMiniprinterGrammar } from '@bablr/miniparser-language-nonbacktracking-js-regex';

const escapeString = (str) => str.replace(/['\\]/g, '\\$&');

export const miniprinterGrammar = new Grammar({
  productions: productions({
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
    },

    NodeGapTag(p) {
      p.print('<');
      p.eatProduction(p.node.type);
      if (p.node.attrs) {
        p.print(' ');
        p.eatProduction(p.node.attrs);
      }
      p.print('>');
    },

    String(p) {
      p.print(`'`);
      p.print(escapeString(p.node.value));
      p.print(`'`);
    },

    Regex(p) {
      p.grammars.push(regexMiniprinterGrammar);
      p.eatProduction(p.node.value);
      p.grammars.pop();
    },

    Attribute(p) {
      p.print(p.node.key);
      p.print('=');
      p.eatProduction(p.node.value);
    },
  }),
});
