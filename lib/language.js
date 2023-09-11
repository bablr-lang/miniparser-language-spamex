import * as regex from '@bablr/miniparser-language-nonbacktracking-js-regex';
import { buildCovers } from '@bablr/grammar';

import { SpamexMiniparserGrammar } from './parse-grammar.js';

const miniparser = Symbol.for('@bablr/grammars/miniparser');

export const name = 'Spamex';

const node = Symbol.for('@bablr/node');

export const covers = buildCovers({
  [node]: ['AttributeMatcher', 'Argument', 'Identifier', 'Expression'],
  Expression: ['TagMatcher', 'StringMatcher', 'RegexMatcher'],
  TagMatcher: ['TokenMatcher', 'NodeMatcher'],
});

export const grammars = {
  [miniparser]: SpamexMiniparserGrammar,
};

export const dependencies = new Map([['Regex', regex]]);
