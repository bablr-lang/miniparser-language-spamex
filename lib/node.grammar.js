import { i, re } from '@bablr/helpers/shorthand';
import { buildCovers } from '@bablr/grammar';

const { isArray } = Array;
const node = Symbol.for('@bablr/node');

const _ = /\s+/;

function parseString(raw) {
  let cooked = '';
  let escaped = false;

  for (const chr of raw) {
    if (chr === '\\') {
      escaped = true;
    } else {
      if (escaped) {
        // TODO: do escape processing things
        escaped = false;
      } else {
        cooked += chr;
      }
    }
  }
  return cooked;
}

export default class SpamexNodeGrammar {
  constructor() {
    this.covers = buildCovers({
      [node]: ['AttributeMatcher', 'Argument', 'Identifier', 'Expression'],
      Expression: ['TextMatcher', 'TagMatcher'],
      TextMatcher: ['StringMatcher', 'RegexMatcher'],
      TagMatcher: ['TokenMatcher', 'NodeMatcher'],
    });
  }

  // @Node
  *Expression() {
    if (yield i`match('<|[')`) {
      throw new Error('gap token syntax is illegal in grammar definitions');
    } else if (yield i`match('<|')` || (yield i`match('<| |>')`)) {
      yield i`eat(<TokenMatcher>)`;
    } else if (yield i`match(/<(?:\w|$)/)`) {
      yield i`eat(<NodeMatcher>)`;
    } else if (yield i`/['"]/)`) {
      yield i`eat(<StringMatcher>)`;
    } else if (yield i`match('/')`) {
      yield i`eat(<RegexMatcher>)`;
    } else {
      throw new Error(`Unexpected character ${p.chr}`);
    }
  }

  // @Node
  *TokenMatcher() {
    yield i`eat(<| Punctuator '<|' balanced='|>' startSpan='Tag' |>)`;
    yield i`eatMatch(<| |>)`;

    if (yield i`eatMatch(<| Punctuator '|>' balanced |>)`) {
      return { tagName: 'Trivia', value: undefined, attrs: [] };
    }

    const tagName = yield i`eat(<Identifier>)`;

    let sp = yield i`eatMatch(<| |>)`;

    let value = null;
    if (sp && (yield i`match(/['"]/)` || (p.atQuasi && p.quasi.type === 'StringMatcher'))) {
      value = yield i`eat(<StringMatcher>)`;
    } else if (sp && (yield i`match('/')` || (p.atQuasi && p.quasi.type === 'RegexMatcher'))) {
      value = yield i`eat(<RegexMatcher>)`;
    }

    sp = value ? yield i`eatMatch(<| |>)` : sp;

    const attrs = sp ? yield i`eat(<AttributeMatchers>)` : [];

    sp = attrs.length ? yield i`eatMatch(<| |>)` : sp;

    const args = sp && (yield i`match('{'})`) ? yield i`eat(<Arguments>)` : [];

    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator '|>' balanced |>)`;

    return { tagName, value, attrs, args };
  }

  // @Node
  *NodeMatcher() {
    yield i`eat(<| Punctuator '<' balanced='>' startSpan='Tag' |>)`;

    yield i`eat(<Identifier>)`;

    let sp = yield i`eatMatch(<| |>)`;

    const attrs = sp ? yield i`eat(<AttributeMatchers>)` : [];

    sp = attrs.length ? yield i`eatMatch(<| |>)` : sp;

    sp && (yield i`match('{')`) ? yield i`eat(<Arguments>)` : [];

    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator |>)`('>', { endSpan: 'Tag' });
  }

  *AttributeMatchers() {
    const matchers = [];
    let sp = true;
    while (
      sp &&
      (yield i`match(/\w/)` ||
        (p.atQuasi && (isArray(p.quasi) || p.quasi.type === 'AttributeMatcher')))
    ) {
      matchers.push(...p.eatProductions('AttributeMatcher'));
      sp = yield i`eatMatch(/\s+/)`;
    }
    return matchers;
  }

  // @Node
  *AttributeMatcher() {
    const key = yield i`eat(<| Identifier |>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator |>)`('=');
    yield i`eatMatch(<| |>)`;
    const str = yield i`eat(<String>)`;

    return { key, value: str.value };
  }

  *Arguments() {
    const args = [];

    const aQuote = yield i`match('{[')`;

    const oQuote = aQuote ? '{[' : '{';
    const cQuote = aQuote ? ']}' : '}';
    const spanSuffix = aQuote ? ':Expressions' : '';
    const span = `Tag:Arguments${spanSuffix}`;

    yield i`eat(<| Punctuator ${oQuote} balanced=${cQuote} startSpan=${span} |>)`;

    yield i`eatMatch(<| |>)`;

    let first = true;
    while ((first || (yield i`eatMatch(/\s*,\s*/)`)) && !p.done) {
      args.push(...p.eatProductions(aQuote ? 'Expression' : 'Argument'));
      first = false;
    }

    yield i`eatMatch(<| |>)`;

    yield i`eat(<| Punctuator ${cQuote} balanced |>)`;

    return aQuote ? [p.node('Argument', { key: 'expressions', value: args })] : args;
  }

  // @Node
  *Argument() {
    const key = yield i`eat(<| Identifier |>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator |>)`(':');
    yield i`eatMatch(<| |>)`;
    const value = yield i`eat(<Expression>)`;

    return { key, value };
  }

  // @Node
  *Identifier() {
    const language = p.language.name;
    const firstPart = yield i`eat(<| Identifier |>)`;
    const sep = yield i`eatMatch(':')`;
    const secondPart = sep ? yield i`eatMatch(<| Identifier |>)` : null;
    return sep
      ? { language: firstPart, production: secondPart }
      : { language, production: firstPart };
  }

  // @Node
  *StringMatcher() {
    yield i`eat(<String>)`;
  }

  *String() {
    const q = yield i`eat(/['"]/)`;

    const raw = yield i`eatMatch(${q === '"' ? re`/[^\n"]*/` : re`/[^\n']*/`})`;

    yield i`eat()`(q);

    return { value: parseString(raw) };
  }

  // @Node
  *RegexMatcher() {
    yield i`eat(<| Punctuator '/' balanced='/' startSpan='Expression' |>)`;
    yield i`eat(<Regex:Pattern path='pattern'>)`;
    yield i`eat(<| Punctuator '/' balanced |>)`;
    yield i`eat(<Regex:Flags path='flags'>)`;
  }
}
