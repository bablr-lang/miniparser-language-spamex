import { i } from '@bablr/boot/shorthand.macro';
import { Node, CoveredBy, InjectFrom, UnboundAttributes } from '@bablr/helpers/decorators';
import * as productions from '@bablr/helpers/productions';
import * as Regex from '@bablr/language-en-regex-vm-pattern';
import * as CSTML from '@bablr/language-en-cstml';
import * as Space from '@bablr/language-en-blank-space';
import { notNull } from '@bablr/agast-helpers/tree';

export const canonicalURL = 'https://bablr.org/languages/core/en/spamex';

export const dependencies = { Regex, CSTML, Space };

const { eatMatchTrivia } = CSTML;

export const grammar = class SpamexGrammar {
  @CoveredBy('Expression')
  *Matcher() {
    yield i`eat(<Any /> null [
        <NodeMatcher '<' />
        <CSTML:String /['"]/ />
        <Regex:Pattern '/' />
      ])`;
  }

  @Node
  @CoveredBy('Matcher')
  *NodeMatcher() {
    let open = yield i`eat(<OpenNodeMatcher /> 'open')`;

    const selfClosing = notNull(open.get('selfClosingTagToken'));

    if (selfClosing) {
      yield i`eat([] 'children[]$')`;
      yield i`eat(null 'close')`;
    } else {
      // TODO
      yield* eatMatchTrivia();

      yield i`eat(<CloseNodeMatcher /> 'close')`;
    }
  }

  @Node
  *OpenNodeMatcher() {
    yield i`eat(<*Punctuator '<' balancedSpan='Tag' balanced='>' /> 'open')`;
    yield i`eat(<CSTML:Flags /> 'flags')`;

    if (yield i`eatMatch(<CSTML:TagType /[a-zA-Z'"\g]/ />)`) {
      // continue
    } else if (yield i`eatMatch(<*Punctuator /[ \t]+|?/ /> 'type$')`) {
      // continue
    }

    let sp = yield* eatMatchTrivia();

    if (
      sp &&
      !(yield i`match(/\/$/)`) &&
      (yield i`eatMatch(<StringMatcher /> 'intrinsicValue$')`)
    ) {
      sp = yield* eatMatchTrivia();
    }

    while (sp && (yield i`match(/!?[a-zA-Z]/)`)) {
      yield i`eat(<Attribute /> 'attributes[]')`;
      sp = yield* eatMatchTrivia();
    }

    yield i`eatMatch(<*Punctuator '/' /> 'selfClosingTagToken')`;
    yield i`eat(<*Punctuator '>' balancer /> 'close')`;
  }

  @Node
  @CoveredBy('Matcher')
  *CloseNodeMatcher() {
    yield i`eat(<*Punctuator '</' balanced='>' /> 'openToken')`;
    yield i`eatMatch(<TagType />)`;
    yield i`eat(<*Punctuator '>' balancer /> 'closeToken')`;
  }

  *Attributes() {
    yield i`eatMatch(<List /> null {
        element: <Attribute />
        allowTrailingSeparator: false
      })`;
  }

  *Attribute() {
    if (yield i`match(/[a-zA-Z]+\s*=/)`) {
      yield i`eat(<MappingAttribute />)`;
    } else {
      yield i`eat(<BooleanAttribute />)`;
    }
  }

  @UnboundAttributes(['true'])
  @Node
  @CoveredBy('Attribute')
  *BooleanAttribute() {
    if (yield i`eatMatch(<*Punctuator '!' /> 'negateToken')`) {
      yield i`bindAttribute('true' false)`;
    } else {
      yield i`bindAttribute('true' true)`;
    }
    yield i`eat(<*CSTML:Identifier /> 'key$')`;
  }

  @CoveredBy('Attribute')
  @Node
  *MappingAttribute() {
    yield i`eat(<*CSTML:Identifier /> 'key$')`;
    yield i`eat(<*Punctuator '=' /> 'mapOperator')`;
    yield i`eat(<CSTML:AttributeValue /> 'value$')`;
  }

  @CoveredBy('Matcher')
  @CoveredBy('Expression')
  *StringMatcher() {
    if (yield i`match(/['"]/)`) {
      yield i`eat(<CSTML:String />)`;
    } else {
      yield i`eat(<Regex:Pattern />)`;
    }
  }

  @CoveredBy('StringMatcher')
  @CoveredBy('Matcher')
  @CoveredBy('Expression')
  @Node
  *String() {
    yield i`eat(<CSTML:String />)`;
  }

  @CoveredBy('StringMatcher')
  @CoveredBy('Matcher')
  @CoveredBy('Expression')
  @Node
  *Regex() {
    yield i`eat(<*Punctuator '/' balanced='/' /> 'open')`;
    yield i`eat(<Regex:Alternatives /> 'alternatives[]$')`;
    yield i`eat(<*Punctuator '/' balancer /> 'close')`;
    yield i`eat(<Regex:Flags /> 'flags$')`;
  }

  @InjectFrom(productions)
  List() {}

  @Node
  @InjectFrom(productions)
  Punctuator() {}

  @InjectFrom(productions)
  Any() {}
};
