import { MatchableMiniparserGrammar } from './parse-grammar.js';
import { MatchableMiniprinterGrammar } from './print-grammar.js';

const miniparser = Symbol.for('@bablr/grammars/miniparser');
const miniprinter = Symbol.for('@bablr/grammars/miniprinter');

export const grammars = {
  [miniparser]: MatchableMiniparserGrammar,
  [miniprinter]: MatchableMiniprinterGrammar,
};
