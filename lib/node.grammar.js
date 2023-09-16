import { i, re, spam } from '@bablr/helpers/shorthand';
import { buildCovers } from '@bablr/grammar';

const { isArray } = Array;
const node = Symbol.for('@bablr/node');

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

    yield i`eat(<Identifier path='tagName'>)`;

    let sp = yield i`eatMatch(<| |>)`;

    let value = null;
    if (sp && (yield i`match(/['"]/)` || (p.atQuasi && p.quasi.type === 'StringMatcher'))) {
      value = yield i`eat(<StringMatcher>)`;
    } else if (sp && (yield i`match('/')` || (p.atQuasi && p.quasi.type === 'RegexMatcher'))) {
      value = yield i`eat(<RegexMatcher>)`;
    }

    sp = value ? yield i`eatMatch(<| |>)` : sp;

    const attrs = sp && (yield i`eat(<AttributeMatchers>)`);

    sp = attrs ? yield i`eatMatch(<| |>)` : sp;

    sp && (yield i`match('{'})`) ? yield i`eat(<Arguments>)` : [];

    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator '|>' balanced |>)`;
  }

  // @Node
  *NodeMatcher() {
    yield i`eat(<| Punctuator '<' balanced='>' startSpan='Tag' |>)`;

    yield i`eat(<Identifier>)`;

    let sp = yield i`eatMatch(<| |>)`;

    const attrs = sp && (yield i`eat(<AttributeMatchers>)`);

    sp = attrs ? yield i`eatMatch(<| |>)` : sp;

    sp && (yield i`match('{')`) && (yield i`eat(<Arguments>)`);

    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator '>' balanced |>)`;
  }

  *AttributeMatchers() {
    let sp = true;
    while (
      sp &&
      (yield i`match(/\w/)` ||
        (p.atQuasi && (isArray(p.quasi) || p.quasi.type === 'AttributeMatcher')))
    ) {
      eatProductions(spam`<AttributeMatcher path='attributeMatchers'>`);
      sp = yield i`eatMatch(/\s+/)`;
    }
  }

  // @Node
  *AttributeMatcher() {
    yield i`eat(<| Identifier path='key' |>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator '=' |>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<TextMatcher path='value'>)`;
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
    yield i`eat(<| Identifier path='key' |>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator ':' |>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<Expression path='value'>)`;
  }

  // @Node
  *Identifier() {
    const sep = yield i`eatMatch(':')`;
    sep ? yield i`eatMatch(<| Identifier path='value' |>)` : null;
  }

  // @Node
  *StringMatcher() {
    yield i`eat(<String>)`;
  }

  *String() {
    const q = yield i`eat(<| Punctuator /['"]/ |>)`;

    yield i`eatMatch(${q === '"' ? re`/[^\n"]*/` : re`/[^\n']*/`})`;

    yield i`eat(${q})`;
  }

  // @Node
  *RegexMatcher() {
    yield i`eat(<| Punctuator '/' balanced='/' startSpan='Expression' |>)`;
    yield i`eat(<Regex:Pattern path='pattern'>)`;
    yield i`eat(<| Punctuator '/' balanced |>)`;
    yield i`eat(<Regex:Flags path='flags'>)`;
  }
}
