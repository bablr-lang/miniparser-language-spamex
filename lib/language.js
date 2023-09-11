import * as regex from '@bablr/miniparser-language-nonbacktracking-js-regex';
import { buildCovers } from '@bablr/grammar';

import { SpamexMiniparserGrammar } from './parse-grammar.js';
import { SpamexMiniprinterGrammar } from './print-grammar.js';

const miniparser = Symbol.for('@bablr/grammars/miniparser');
const miniprinter = Symbol.for('@bablr/grammars/miniprinter');

export const name = 'Spamex';

const node = Symbol.for('@bablr/node');

export const covers = buildCovers({
  [node]: ['AttributeMatcher', 'Argument', 'Identifier', 'Expression'],
  Expression: ['TagMatcher', 'StringMatcher', 'RegexMatcher'],
  TagMatcher: ['TokenMatcher', 'NodeMatcher'],
});

export const grammars = {
  [miniparser]: SpamexMiniparserGrammar,
  [miniprinter]: SpamexMiniprinterGrammar,
};

export const dependencies = new Map([['Regex', regex]]);
