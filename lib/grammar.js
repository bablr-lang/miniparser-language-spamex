import { i } from '@bablr/boot/shorthand.macro';
import { Node, Cover, CoveredBy } from '@bablr/boot-helpers/decorators';
import * as regex from '@bablr/language-regex-vm-pattern';
import * as string from '@bablr/language-cstml-string';

export const name = 'Spamex';

export const dependencies = new Map([
  ['Regex', regex],
  ['String', string],
]);

export const grammar = class SpamexGrammar {
  @CoveredBy('Expression')
  @Cover
  *Matcher() {}

  @Cover
  *Expression() {}

  @CoveredBy('Matcher')
  @CoveredBy('Expression')
  @Node
  *TriviaTokenMatcher() {
    yield i`eat(<| Punctuator '<|' path='open' startSpan='Tag' balanced='|>' |>)`;
    yield i`eat(<| Keyword ' ' path='value' |>)`;
    yield i`eat(<| Punctuator '|>' path='close' endSpan='Tag' balancer |>)`;
  }

  @CoveredBy('Matcher')
  @CoveredBy('Expression')
  @Node
  *NodeMatcher() {
    yield i`eat(<| Punctuator '<' path='open' startSpan='Tag' balanced='>' |>)`;
    yield i`eat(<TagType path='type'>)`;
    yield i`eatMatch(<All {[ <| |> <Attributes path='[attributes]'> ]}>)`;
    yield i`eatMatch(<All {[ <| |> <Props path='props'> ]}>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator '>' path='close' endSpan='Tag' balancer |>)`;
  }

  @CoveredBy('Matcher')
  @CoveredBy('Expression')
  @Node
  *TokenMatcher() {
    yield i`eat(<| Punctuator '<|' path='open' startSpan='Tag' balanced='|>' |>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<TagType path='type'>)`;
    yield i`eatMatch(<All {[ <| |> <StringMatcher path='value'> ]}>)`;
    yield i`eatMatch(<All {[ <| |> <Attributes path='[attributes]'> ]}>)`;
    yield i`eatMatch(<All {[ <| |> <Props path='props'> ]}>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator '|>' path='close' endSpan='Tag' balancer |>)`;
  }

  *Attributes() {
    yield i`eatMatch(<All {[
        <| |>
        <List { separator: <| |>, matchable: <Attribute path='attributes'> }>
      ]}>)`;
  }

  @Cover
  *Attribute() {}

  @CoveredBy('Attribute')
  @Node
  *KeyAttribute() {
    yield i`eat(<| Identifier |>)`;
  }

  @CoveredBy('Attribute')
  @Node
  *KeyValueAttribute() {
    yield i`eat(<| Identifier path='key' |>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator '=' |>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<String path='value'>)`;
  }

  @Cover
  *Props() {
    yield i`eat(<Any {[
        <MatchablesArrayProps { guard: '{[' }>
        <ObjectProps>
      ]}>)`;
  }

  @Node
  *MatchablesArrayProps() {
    yield i`eat(<| Punctuator '{[' path='open' balanced=']}' |>)`;

    let sp = yield i`eatMatch(<| |>)`;

    while (sp && (yield i`match(/./s)`)) {
      yield i`eat(<Matcher path='[values]'>)`;
      sp = yield i`eatMatch(<| |>)`;
    }

    yield i`eat(<| Punctuator ']}' path='close' balancer |>)`;
  }

  @Node
  *ObjectProps() {
    yield i`eat(<| Punctuator '{' path='open' balanced='}' |>)`;

    yield i`eatMatch(<| |>)`;

    let first = true;
    while ((first || (yield i`match(/\s*,/)`)) && (yield i`match(/./s)`)) {
      if (!first) {
        yield i`eatMatch(<| |>)`;
        yield i`eat(<| Punctuator ',' path='[separators]' |>)`;
        yield i`eatMatch(<| |>)`;
      }
      yield i`eat(<Argument path='[values]'>)`;
      first = false;
    }

    yield i`eatMatch(<| |>)`;

    yield i`eat(<| Punctuator '}' path='close' balancer |>)`;
  }

  @Node
  *Argument() {
    yield i`eat(<| Identifier |>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator ':' |>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<Expression>)`;
  }

  @Cover
  *TagType() {}

  @CoveredBy('TagType')
  @Node
  *GlobalIdentifier() {
    yield i`eat(<Identifier path='language'>)`;
    yield i`eat(<| Punctuator ':' path='mapOperator' |>)`;
    yield i`eat(<Identifier path='type'>)`;
  }

  @CoveredBy('TagType')
  @Node
  *Identifier() {
    yield i`eat(/\w+/)`;
  }

  @CoveredBy('Expression')
  @Node
  *Boolean() {
    yield i`eat(<| Keyword /true|false/ path='value' |>)`;
  }

  @CoveredBy('Matcher')
  @CoveredBy('Expression')
  @Cover
  StringMatcher() {}

  @CoveredBy('StringMatcher')
  @CoveredBy('Matcher')
  @CoveredBy('Expression')
  @Node
  *String() {
    yield i`eat(<String:String>)`;
  }

  @CoveredBy('StringMatcher')
  @CoveredBy('Matcher')
  @CoveredBy('Expression')
  @Node
  *Regex() {
    yield i`eat(<| Punctuator '/' path='open' balanced='/' |>)`;
    yield i`eat(<Regex:Alternatives path='[alternatives]'>)`;
    yield i`eat(<| Punctuator '/' path='close' balancer |>)`;
    yield i`eat(<Regex:Flags path='flags'>)`;
  }
};
