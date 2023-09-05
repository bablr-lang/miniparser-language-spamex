import { SpamexMiniparserGrammar } from './parse-grammar.js';
import { SpamexMiniprinterGrammar } from './print-grammar.js';

const miniparser = Symbol.for('@bablr/grammars/miniparser');
const miniprinter = Symbol.for('@bablr/grammars/miniprinter');

export const grammars = {
  [miniparser]: SpamexMiniparserGrammar,
  [miniprinter]: SpamexMiniprinterGrammar,
};
