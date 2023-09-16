import * as regex from '@bablr/language-regex-vm-pattern';
import * as sym from '@bablr/helpers/symbols';

export const name = 'Spamex';

import NodeGrammar from './node.grammar.js';
import TokenGrammar from './token.grammar.js';

export const grammars = {
  [sym.node]: NodeGrammar,
  [sym.token]: TokenGrammar,
};

export const dependencies = new Map([['Regex', regex]]);
