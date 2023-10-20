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
  @Cover
  *Matchable() {
    yield i`eat(<Any {[
      <TriviaMatcher { guard: '<| |>' }>
      <NodeMatcher { guard: /<(?:\w|$)/ }>
      <TokenMatcher { guard: '<|' }>
      <String { guard: /['"]/ }>
      <Regex { guard: '/' }>
    ]}>)`;
  }

  @Cover
  *Expression() {
    yield i`eat(<Any {[
      <TriviaMatcher { guard: '<| |>' }>
      <NodeMatcher { guard: /<(?:\w|$)/ }>
      <TokenMatcher { guard: '<|' }>
      <String { guard: /['"]/ }>
      <Regex { guard: '/' }>
      <Boolean { guard: /true|false/ }>
    ]}>)`;
  }

  @Node
  *TriviaMatcher() {
    yield i`eat(<| Punctuator '<|' path='open' startSpan='Tag' balanced='|>' |>)`;
    yield i`eat(<| Keyword ' ' path='value' |>)`;
    yield i`eat(<| Punctuator '|>' path='close' endSpan='Tag' balancer |>)`;
  }

  @Node
  *NodeMatcher() {
    yield i`eat(<| Punctuator '<' path='open' startSpan='Tag' balanced='>' |>)`;
    yield i`eat(<TagType path='type'>)`;

    let sp = yield i`eatMatch(<| |>)`;

    if (sp && (yield i`match(/\w+/)`)) {
      yield i`eat(<Attributes path='[attrs]'>)`;
      sp = yield i`eatMatch(<| |>)`;
    }

    if (sp && (yield i`match('{')`)) {
      yield i`eat(<Props path='props'>)`;
      sp = yield i`eatMatch(<| |>)`;
    }

    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator '>' path='close' endSpan='Tag' balancer |>)`;
  }

  @Node
  *TokenMatcher() {
    yield i`eat(<| Punctuator '<|' path='open' startSpan='Tag' balanced='|>' |>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<TagType path='type'>)`;

    let sp = yield i`eatMatch(<| |>)`;

    if (sp && (yield i`match(/['"]/)`)) {
      yield i`eat(<String path='value'>)`;
      sp = yield i`eatMatch(<| |>)`;
    } else if (sp && (yield i`match('/')`)) {
      yield i`eat(<Regex path='value'>)`;
      sp = yield i`eatMatch(<| |>)`;
    }

    if (sp && (yield i`match(/\w+/)`)) {
      yield i`eat(<Attributes path='[attrs]'>)`;
      sp = yield i`eatMatch(<| |>)`;
    }

    if (sp && (yield i`match('{')`)) {
      yield i`eat(<Props path='props'>)`;
      sp = yield i`eatMatch(<| |>)`;
    }

    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator '|>' path='close' endSpan='Tag' balancer |>)`;
  }

  *Attributes() {
    yield i`eatMatch(<All {[
        <| |>
        <List { separator: <| |>, matchable: <Attribute path='attrs'> }>
      ]}>)`;
  }

  @Cover
  *Attribute() {
    yield i`eat(<Any {[
        <| KeyValueAttribute |>
        <| KeyAttribute |>
      ]}>)`;
  }

  @Node
  @CoveredBy('Attribute')
  *KeyAttribute() {
    yield i`eat(<| Identifier |>)`;
  }

  @Node
  @CoveredBy('Attribute')
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
      yield i`eat(<Matchable path='[values]'>)`;
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
  *TagType() {
    yield i`eat(<Any {[
      <GlobalIdentifier { guard: /\w+:/ }>
      <Identifier { guard: /<(?:\w|$)/ }>
    ]}>)`;
  }

  @Node
  *GlobalIdentifier() {
    yield i`eat(<| Identifier /\w+/y path='language' |>)`;
    yield i`eat(<| Punctuator ':' path='mapOperator' |>)`;
    yield i`eat(<| Identifier /\w+/y path='type' |>)`;
  }

  @Node
  *String() {
    yield i`eat(<String:String>)`;
  }

  @Node
  *String() {
    yield i`eat(<String:String>)`;
  }

  @Node
  *Boolean() {
    yield i`eat(<| Keyword /true|false/ path='value' |>)`;
  }

  @Node
  *Regex() {
    yield i`eat(<RegexLiteral>)`;
  }

  @Node
  *Regex() {
    yield i`eat(<RegexLiteral>)`;
  }

  @Node
  *RegexLiteral() {
    yield i`eat(<| Punctuator '/' path='open' balanced='/' |>)`;
    yield i`eat(<Regex:Alternatives path='[alternatives]'>)`;
    yield i`eat(<| Punctuator '/' path='close' balancer |>)`;
    yield i`eat(<Regex:Flags path='flags'>)`;
  }
};
