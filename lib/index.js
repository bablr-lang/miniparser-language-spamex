import * as regex from '@bablr/language-regex-vm-pattern';

import { SpamexMiniparserGrammar } from './parse-grammar.js';

const miniparser = Symbol.for('@bablr/grammars/miniparser');

export const name = 'Spamex';

export const grammars = {
  [miniparser]: SpamexMiniparserGrammar,
};

export const dependencies = new Map([['Regex', regex]]);
