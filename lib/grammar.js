import { i } from '@bablr/boot/shorthand.macro';
import { Node, Cover, CoveredBy, InjectFrom } from '@bablr/boot-helpers/decorators';
import * as productions from '@bablr/boot-helpers/productions';
import * as Regex from '@bablr/language-regex-vm-pattern';
import * as String from '@bablr/language-cstml-string';

export const name = 'Spamex';

export const dependencies = { Regex, String };

export const grammar = class SpamexGrammar {
  @InjectFrom(productions)
  All() {}

  @InjectFrom(productions)
  List() {}

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
        <List { separator: <| |>, element: <Attribute path='attributes'> }>
      ]}>)`;
  }

  @Cover
  *Attribute() {}

  @CoveredBy('Attribute')
  @Node
  *BooleanAttribute() {
    yield i`eat(<| Identifier path='key' |>)`;
  }

  @CoveredBy('Attribute')
  @Node
  *StringAttribute() {
    yield i`eat(<| Identifier path='key' |>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator '=' path='mapOperator' |>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<String path='value'>)`;
  }

  @Cover
  *Props() {}

  @CoveredBy('Props')
  @Node
  *MatchablesArrayProps() {
    yield i`eat(<| Punctuator '{[' path='open' balanced=']}' |>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<List path='[values]' { separator: <| |>, element: <Matcher path='[values]'> }>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator ']}' path='close' balancer |>)`;
  }

  @CoveredBy('Props')
  @Node
  *ObjectProps() {
    yield i`eat(<| Punctuator '{' path='open' balanced='}' |>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<List path='[values]' {
        separator: <All {[ <| |> <| Punctuator ',' path='[separators]' |> <| |> ]}>,
        element: <Matcher path='[values]'>
      }>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator '}' path='close' balancer |>)`;
  }

  @Node
  *Argument() {
    yield i`eat(<| Identifier path='key' |>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<| Punctuator ':' path='mapOperator' |>)`;
    yield i`eatMatch(<| |>)`;
    yield i`eat(<Expression path='value'>)`;
  }

  @Cover
  *TagType() {}

  @CoveredBy('TagType')
  @Node
  *GlobalIdentifier() {
    yield i`eat(<Identifier path='language'>)`;
    yield i`eat(<| Punctuator ':' path='namespaceOperator' |>)`;
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
