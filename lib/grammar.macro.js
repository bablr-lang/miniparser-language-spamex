import { re, spam as m } from '@bablr/boot';
import { Node, CoveredBy, InjectFrom, UnboundAttributes } from '@bablr/helpers/decorators';
import * as productions from '@bablr/helpers/productions';
import { e, eat, eatMatch, match, bindAttribute, fail } from '@bablr/helpers/grammar';
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
    yield eat(m`<Any />`, e([m`<PropertyMatcher /[a-zA-Z.<]/ />`, m`<StringMatcher /[/'"]/ />`]));
  }

  *NodeMatcher() {
    yield eat(
      m`<Any />`,
      e([
        m`<GapNodeMatcher '<//>' />`,
        m`<BasicNodeMatcher '<' />`,
        m`<ArrayNodeMatcher '[' />`,
        m`<NullNodeMatcher 'null' />`,
      ]),
    );
  }

  @Node
  @CoveredBy('NodeMatcher')
  *GapNodeMatcher() {
    yield eat(m`sigilToken: <Punctuator '<//>' />`);
  }

  @Node
  @CoveredBy('NodeMatcher')
  *ArrayNodeMatcher() {
    yield eat(m`sigilToken: <Punctuator '[]' />`);
  }

  @Node
  @CoveredBy('NodeMatcher')
  *NullNodeMatcher() {
    yield eat(m`sigilToken: <Punctuator 'null' />`);
  }

  @Node
  @CoveredBy('Matcher')
  *PropertyMatcher() {
    yield eatMatch(m`refMatcher: <ReferenceMatcher />`);
    yield* eatMatchTrivia();
    yield eat(m`nodeMatcher: <BasicNodeMatcher />`);
  }

  @Node
  *ReferenceMatcher() {
    let name;
    if (yield match('.')) {
      name = yield eat(m`name$: <*Punctuator '.' />`);
    } else {
      name = yield eatMatch(m`name$: <*CSTML:Identifier />`);
    }

    if (name && (yield eatMatch(m`openIndexToken: <*Punctuator '[' balanced=']' />`))) {
      yield* eatMatchTrivia();
      yield eatMatch(m`closeIndexToken: <*Punctuator ']' balancer />`);
    } else {
      yield eatMatch(m`closeIndexToken: null`);
    }

    yield* eatMatchTrivia();
    yield eatMatch(m`flags: <CSTML:ReferenceFlags />`);
    yield* eatMatchTrivia();
    yield eat(m`sigilToken: <*Punctuator ':' />`);
  }

  @Node
  @CoveredBy('NodeMatcher')
  *BasicNodeMatcher() {
    let open = yield eat(m`open: <OpenNodeMatcher />`);

    const selfClosing = notNull(open.get('selfClosingTagToken'));

    if (selfClosing) {
      yield eat(m`children[]$: []`);
      yield eat(m`close: null`);
    } else {
      // TODO
      yield* eatMatchTrivia();

      yield eat(m`close: <CloseNodeMatcher />`);
    }
  }

  @Node
  *OpenNodeMatcher() {
    yield eat(m`open: <*Punctuator '<' balancedSpan='Tag' balanced='>' />`);
    yield eat(m`flags: <CSTML:NodeFlags />`);

    if (yield eatMatch(m`<CSTML:TagType /[a-zA-Z'"\g]/ />`)) {
      // continue
    } else if (yield eatMatch(m`type$: <*Punctuator /[ \t]+|?/ />`)) {
      // continue
    } else {
      yield fail();
    }

    let sp = yield* eatMatchTrivia();

    if (
      sp &&
      !(yield match(re`/\/$/`)) &&
      (yield eatMatch(m`intrinsicValue$: <StringMatcher />`))
    ) {
      sp = yield* eatMatchTrivia();
    }

    while (sp && (yield match(re`/!?[a-zA-Z]/`))) {
      yield eat(m`attributes[]: <Attribute />`);
      sp = yield* eatMatchTrivia();
    }

    yield eatMatch(m`selfClosingTagToken: <*Punctuator '/' />`);
    yield eat(m`close: <*Punctuator '>' balancer />`);
  }

  @Node
  @CoveredBy('Matcher')
  *CloseNodeMatcher() {
    yield eat(m`openToken: <*Punctuator '</' balanced='>' />`);
    yield eat(m`closeToken: <*Punctuator '>' balancer />`);
  }

  *Attributes() {
    yield eatMatch(
      m`<List />`,
      e({
        element: m`<Attribute />`,
        allowTrailingSeparator: false,
      }),
    );
  }

  *Attribute() {
    if (yield match(re`/[a-zA-Z]+\s*=/`)) {
      yield eat(m`<MappingAttribute />`);
    } else {
      yield eat(m`<BooleanAttribute />`);
    }
  }

  @UnboundAttributes(['true'])
  @Node
  @CoveredBy('Attribute')
  *BooleanAttribute() {
    if (yield eatMatch(m`negateToken: <*Punctuator '!' />`)) {
      yield bindAttribute('true', false);
    } else {
      yield bindAttribute('true', true);
    }
    yield eat(m`key$: <*CSTML:Identifier />`);
  }

  @CoveredBy('Attribute')
  @Node
  *MappingAttribute() {
    yield eat(m`key$: <*CSTML:Identifier />`);
    yield eat(m`mapOperator: <*Punctuator '=' />`);
    yield eat(m`value$: <CSTML:AttributeValue />`);
  }

  @CoveredBy('Matcher')
  @CoveredBy('Expression')
  *StringMatcher() {
    if (yield match(re`/['"]/`)) {
      yield eat(m`<String />`);
    } else {
      yield eat(m`<Pattern />`);
    }
  }

  @CoveredBy('StringMatcher')
  @CoveredBy('Matcher')
  @CoveredBy('Expression')
  @Node
  *String() {
    yield eat(m`<CSTML:String />`, null, e({ suppressNode: e(true) }));
  }

  @CoveredBy('StringMatcher')
  @CoveredBy('Matcher')
  @CoveredBy('Expression')
  @Node
  *Regex() {
    yield eat(m`<Regex:Pattern />`, null, e({ suppressNode: e(true) }));
  }

  @InjectFrom(productions)
  List() {}

  @Node
  @InjectFrom(productions)
  Punctuator() {}

  @InjectFrom(productions)
  Any() {}
};
