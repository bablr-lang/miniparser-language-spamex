import _applyDecs from "@babel/runtime/helpers/applyDecs2305";
import { interpolateString as _interpolateString } from "@bablr/agast-helpers/template";
import { interpolateArrayChildren as _interpolateArrayChildren } from "@bablr/agast-helpers/template";
import { interpolateArray as _interpolateArray } from "@bablr/agast-helpers/template";
import * as _l from "@bablr/agast-vm-helpers/languages";
import * as _t from "@bablr/agast-helpers/shorthand";
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _initProto;
import { Node, CoveredBy, InjectFrom } from '@bablr/helpers/decorators';
import * as productions from '@bablr/helpers/productions';
import * as Regex from '@bablr/language-regex-vm-pattern';
import * as CSTML from '@bablr/language-cstml';
import * as Comment from '@bablr/language-c-comments';
export const canonicalURL = 'https://github.com/bablr-lang/language-spamex';
export const dependencies = {
  Regex,
  CSTML,
  Comment
};
const {
  eatMatchTrivia
} = CSTML;
export const grammar = (_dec = CoveredBy('Expression'), _dec2 = CoveredBy('Matcher'), _dec3 = CoveredBy('Expression'), _dec4 = CoveredBy('Attribute'), _dec5 = CoveredBy('Attribute'), _dec6 = CoveredBy('Matcher'), _dec7 = CoveredBy('Expression'), _dec8 = CoveredBy('StringMatcher'), _dec9 = CoveredBy('Matcher'), _dec10 = CoveredBy('Expression'), _dec11 = CoveredBy('StringMatcher'), _dec12 = CoveredBy('Matcher'), _dec13 = CoveredBy('Expression'), _dec14 = InjectFrom(productions), _dec15 = InjectFrom(productions), _dec16 = InjectFrom(productions), class SpamexGrammar {
  static {
    [_initProto] = _applyDecs(this, [[_dec, 2, "Matcher"], [[_dec2, _dec3, Node], 2, "NodeMatcher"], [[_dec4, Node], 2, "BooleanAttribute"], [[_dec5, Node], 2, "MappingAttribute"], [[_dec6, _dec7], 2, "StringMatcher"], [[_dec8, _dec9, _dec10, Node], 2, "String"], [[_dec11, _dec12, _dec13, Node], 2, "Regex"], [_dec14, 2, "List"], [_dec15, 2, "Match"], [[Node, _dec16], 2, "Punctuator"]], []).e;
  }
  constructor(...args) {
    _initProto(this);
  }
  *Matcher() {
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          type: _t.s_node(_l.Spamex, "Identifier", "Match"),
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.Instruction, "Null", [_t.ref`value`], {
          value: _t.s_i_node(_l.Instruction, "Keyword", "null")
        }, {}), _t.node(_l.Instruction, "Array", [_t.ref`open`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit("\n        ")], {}, {})), _t.ref`elements[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit("\n        ")], {}, {})), _t.ref`elements[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit("\n        ")], {}, {})), _t.ref`elements[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit("\n      ")], {}, {})), _t.ref`close`], {
          open: _t.s_i_node(_l.Instruction, "Punctuator", "["),
          elements: [_t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
            open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
            values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
              open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
              type: _t.s_node(_l.Spamex, "Identifier", "NodeMatcher"),
              close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
            }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
              content: _t.node(_l.CSTML, "Content", [_t.lit("<")], {}, {}),
              close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
            }, {})],
            close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
          }, {}), _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
            open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
            values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`, _t.ref`close`], {
              open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
              language: _t.s_node(_l.Spamex, "Identifier", "CSTML"),
              namespaceOperator: _t.s_i_node(_l.Spamex, "Punctuator", ":"),
              type: _t.s_node(_l.Spamex, "Identifier", "String"),
              close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
            }, {}), _t.node(_l.Regex, "Pattern", [_t.ref`open`, _t.ref`alternatives[]`, _t.ref`close`], {
              open: _t.s_i_node(_l.Regex, "Punctuator", "/"),
              alternatives: [_t.node(_l.Regex, "Alternative", [_t.ref`elements[]`], {
                elements: [_t.node(_l.Regex, "CharacterClass", [_t.ref`open`, _t.ref`elements[]`, _t.ref`elements[]`, _t.ref`close`], {
                  open: _t.s_i_node(_l.Regex, "Punctuator", "["),
                  elements: [_t.node(_l.Regex, "Character", [_t.lit("'")], {}, {}), _t.node(_l.Regex, "Character", [_t.lit("\"")], {}, {})],
                  close: _t.s_i_node(_l.Regex, "Punctuator", "]")
                }, {})]
              }, {})],
              close: _t.s_i_node(_l.Regex, "Punctuator", "/")
            }, {})],
            close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
          }, {}), _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
            open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
            values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`, _t.ref`close`], {
              open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
              language: _t.s_node(_l.Spamex, "Identifier", "Regex"),
              namespaceOperator: _t.s_i_node(_l.Spamex, "Punctuator", ":"),
              type: _t.s_node(_l.Spamex, "Identifier", "Pattern"),
              close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
            }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
              content: _t.node(_l.CSTML, "Content", [_t.lit("/")], {}, {}),
              close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
            }, {})],
            close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
          }, {})],
          close: _t.s_i_node(_l.Instruction, "Punctuator", "]")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
  }
  *NodeMatcher() {
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`tokenFlag`, _t.ref`type`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`intrinsicValue`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`attributes[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`attributes[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          tokenFlag: _t.s_i_node(_l.Spamex, "Punctuator", "*"),
          type: _t.s_node(_l.Spamex, "Identifier", "Punctuator"),
          intrinsicValue: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("<")], {}, {}),
            close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
          }, {}),
          attributes: [_t.node(_l.Spamex, "MappingAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
            key: _t.node(_l.Spamex, "Literal", [_t.lit("balancedSpan")], {}, {}),
            mapOperator: _t.s_i_node(_l.Spamex, "Punctuator", "="),
            value: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
              content: _t.node(_l.CSTML, "Content", [_t.lit("Tag")], {}, {}),
              close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
            }, {})
          }, {}), _t.node(_l.Spamex, "MappingAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
            key: _t.node(_l.Spamex, "Literal", [_t.lit("balanced")], {}, {}),
            mapOperator: _t.s_i_node(_l.Spamex, "Punctuator", "="),
            value: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
              content: _t.node(_l.CSTML, "Content", [_t.lit(">")], {}, {}),
              close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
            }, {})
          }, {})],
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("open")], {}, {}),
          close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eatMatch"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          language: _t.s_node(_l.Spamex, "Identifier", "CSTML"),
          namespaceOperator: _t.s_i_node(_l.Spamex, "Punctuator", ":"),
          type: _t.s_node(_l.Spamex, "Identifier", "Flags"),
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
    if (yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "match"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Regex, "Pattern", [_t.ref`open`, _t.ref`alternatives[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Regex, "Punctuator", "/"),
          alternatives: [_t.node(_l.Regex, "Alternative", [_t.ref`elements[]`, _t.ref`elements[]`], {
            elements: [_t.node(_l.Regex, "Quantifier", [_t.ref`element`, _t.ref`value`], {
              element: _t.node(_l.Regex, "WordCharacterSet", [_t.ref`escape`, _t.ref`value`], {
                escape: _t.s_i_node(_l.Regex, "Punctuator", "\\"),
                value: _t.s_i_node(_l.Regex, "Keyword", "w")
              }, {}),
              value: _t.s_i_node(_l.Regex, "Keyword", "+")
            }, {
              min: 1,
              max: Infinity,
              greedy: true
            }), _t.node(_l.Regex, "Character", [_t.lit(":")], {}, {})]
          }, {})],
          close: _t.s_i_node(_l.Regex, "Punctuator", "/")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {})) {
      yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
        verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
        arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
          values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`tokenFlag`, _t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`, _t.ref`close`], {
            open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
            tokenFlag: _t.s_i_node(_l.Spamex, "Punctuator", "*"),
            language: _t.s_node(_l.Spamex, "Identifier", "CSTML"),
            namespaceOperator: _t.s_i_node(_l.Spamex, "Punctuator", ":"),
            type: _t.s_node(_l.Spamex, "Identifier", "Identifier"),
            close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
          }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("language")], {}, {}),
            close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
          }, {})],
          close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
        }, {})
      }, {});
      yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
        verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
        arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
          values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`tokenFlag`, _t.ref`type`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`intrinsicValue`, _t.ref`close`], {
            open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
            tokenFlag: _t.s_i_node(_l.Spamex, "Punctuator", "*"),
            type: _t.s_node(_l.Spamex, "Identifier", "Punctuator"),
            intrinsicValue: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
              content: _t.node(_l.CSTML, "Content", [_t.lit(":")], {}, {}),
              close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
            }, {}),
            close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
          }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("namespaceOperator")], {}, {}),
            close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
          }, {})],
          close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
        }, {})
      }, {});
      yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
        verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
        arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
          values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`tokenFlag`, _t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`, _t.ref`close`], {
            open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
            tokenFlag: _t.s_i_node(_l.Spamex, "Punctuator", "*"),
            language: _t.s_node(_l.Spamex, "Identifier", "CSTML"),
            namespaceOperator: _t.s_i_node(_l.Spamex, "Punctuator", ":"),
            type: _t.s_node(_l.Spamex, "Identifier", "Identifier"),
            close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
          }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("type")], {}, {}),
            close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
          }, {})],
          close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
        }, {})
      }, {});
    } else {
      yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
        verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
        arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
          values: [_t.node(_l.Instruction, "Null", [_t.ref`value`], {
            value: _t.s_i_node(_l.Instruction, "Keyword", "null")
          }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("language")], {}, {}),
            close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
          }, {})],
          close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
        }, {})
      }, {});
      yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
        verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
        arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
          values: [_t.node(_l.Instruction, "Null", [_t.ref`value`], {
            value: _t.s_i_node(_l.Instruction, "Keyword", "null")
          }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("namespaceOperator")], {}, {}),
            close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
          }, {})],
          close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
        }, {})
      }, {});
      yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
        verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
        arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
          values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`tokenFlag`, _t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`, _t.ref`close`], {
            open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
            tokenFlag: _t.s_i_node(_l.Spamex, "Punctuator", "*"),
            language: _t.s_node(_l.Spamex, "Identifier", "CSTML"),
            namespaceOperator: _t.s_i_node(_l.Spamex, "Punctuator", ":"),
            type: _t.s_node(_l.Spamex, "Identifier", "Identifier"),
            close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
          }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("type")], {}, {}),
            close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
          }, {})],
          close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
        }, {})
      }, {});
    }
    let sp = yield* eatMatchTrivia();
    if (sp && (yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eatMatch"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          type: _t.s_node(_l.Spamex, "Identifier", "StringMatcher"),
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("children[]")], {}, {}),
          close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {}))) {
      sp = yield* eatMatchTrivia();
    }
    while (sp && (yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "match"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Regex, "Pattern", [_t.ref`open`, _t.ref`alternatives[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Regex, "Punctuator", "/"),
          alternatives: [_t.node(_l.Regex, "Alternative", [_t.ref`elements[]`, _t.ref`elements[]`], {
            elements: [_t.node(_l.Regex, "Quantifier", [_t.ref`element`, _t.ref`value`], {
              element: _t.node(_l.Regex, "Character", [_t.lit("!")], {}, {}),
              value: _t.s_i_node(_l.Regex, "Keyword", "?")
            }, {
              min: 0,
              max: 1,
              greedy: true
            }), _t.node(_l.Regex, "WordCharacterSet", [_t.ref`escape`, _t.ref`value`], {
              escape: _t.s_i_node(_l.Regex, "Punctuator", "\\"),
              value: _t.s_i_node(_l.Regex, "Keyword", "w")
            }, {})]
          }, {})],
          close: _t.s_i_node(_l.Regex, "Punctuator", "/")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {}))) {
      yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
        verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
        arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
          values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
            open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
            type: _t.s_node(_l.Spamex, "Identifier", "Attribute"),
            close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
          }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("attributes[]")], {}, {}),
            close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
          }, {})],
          close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
        }, {})
      }, {});
      sp = yield* eatMatchTrivia();
    }
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`tokenFlag`, _t.ref`type`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`intrinsicValue`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`attributes[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          tokenFlag: _t.s_i_node(_l.Spamex, "Punctuator", "*"),
          type: _t.s_node(_l.Spamex, "Identifier", "Punctuator"),
          intrinsicValue: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit(">")], {}, {}),
            close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
          }, {}),
          attributes: [_t.node(_l.Spamex, "BooleanAttribute", [_t.ref`key`], {
            key: _t.node(_l.Spamex, "Literal", [_t.lit("balancer")], {}, {})
          }, {})],
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("close")], {}, {}),
          close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
  }
  *Attributes() {
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eatMatch"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          type: _t.s_node(_l.Spamex, "Identifier", "List"),
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.Instruction, "Null", [_t.ref`value`], {
          value: _t.s_i_node(_l.Instruction, "Keyword", "null")
        }, {}), _t.node(_l.Instruction, "Object", [_t.ref`open`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit("\n        ")], {}, {})), _t.ref`properties[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit("\n        ")], {}, {})), _t.ref`properties[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit("\n      ")], {}, {})), _t.ref`close`], {
          open: _t.s_i_node(_l.Instruction, "Punctuator", "{"),
          properties: [_t.node(_l.Instruction, "Property", [_t.ref`key`, _t.ref`mapOperator`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`value`], {
            key: _t.node(_l.Instruction, "Literal", [_t.lit("element")], {}, {}),
            mapOperator: _t.s_i_node(_l.Instruction, "Punctuator", ":"),
            value: _t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
              open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
              type: _t.s_node(_l.Spamex, "Identifier", "Attribute"),
              close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
            }, {})
          }, {}), _t.node(_l.Instruction, "Property", [_t.ref`key`, _t.ref`mapOperator`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`value`], {
            key: _t.node(_l.Instruction, "Literal", [_t.lit("allowTrailingSeparator")], {}, {}),
            mapOperator: _t.s_i_node(_l.Instruction, "Punctuator", ":"),
            value: _t.node(_l.Instruction, "Boolean", [_t.ref`value`], {
              value: _t.s_i_node(_l.Instruction, "Keyword", "false")
            }, {})
          }, {})],
          close: _t.s_i_node(_l.Instruction, "Punctuator", "}")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
  }
  *Attribute() {
    if (yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "match"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Regex, "Pattern", [_t.ref`open`, _t.ref`alternatives[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Regex, "Punctuator", "/"),
          alternatives: [_t.node(_l.Regex, "Alternative", [_t.ref`elements[]`, _t.ref`elements[]`, _t.ref`elements[]`], {
            elements: [_t.node(_l.Regex, "Quantifier", [_t.ref`element`, _t.ref`value`], {
              element: _t.node(_l.Regex, "WordCharacterSet", [_t.ref`escape`, _t.ref`value`], {
                escape: _t.s_i_node(_l.Regex, "Punctuator", "\\"),
                value: _t.s_i_node(_l.Regex, "Keyword", "w")
              }, {}),
              value: _t.s_i_node(_l.Regex, "Keyword", "+")
            }, {
              min: 1,
              max: Infinity,
              greedy: true
            }), _t.node(_l.Regex, "Quantifier", [_t.ref`element`, _t.ref`value`], {
              element: _t.node(_l.Regex, "SpaceCharacterSet", [_t.ref`escape`, _t.ref`value`], {
                escape: _t.s_i_node(_l.Regex, "Punctuator", "\\"),
                value: _t.s_i_node(_l.Regex, "Keyword", "s")
              }, {}),
              value: _t.s_i_node(_l.Regex, "Keyword", "*")
            }, {
              min: 0,
              max: Infinity,
              greedy: true
            }), _t.node(_l.Regex, "Character", [_t.lit("=")], {}, {})]
          }, {})],
          close: _t.s_i_node(_l.Regex, "Punctuator", "/")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {})) {
      yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
        verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
        arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
          values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
            open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
            type: _t.s_node(_l.Spamex, "Identifier", "MappingAttribute"),
            close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
          }, {})],
          close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
        }, {})
      }, {});
    } else {
      yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
        verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
        arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
          values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
            open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
            type: _t.s_node(_l.Spamex, "Identifier", "BooleanAttribute"),
            close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
          }, {})],
          close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
        }, {})
      }, {});
    }
  }
  *BooleanAttribute() {
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`tokenFlag`, _t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          tokenFlag: _t.s_i_node(_l.Spamex, "Punctuator", "*"),
          language: _t.s_node(_l.Spamex, "Identifier", "CSTML"),
          namespaceOperator: _t.s_i_node(_l.Spamex, "Punctuator", ":"),
          type: _t.s_node(_l.Spamex, "Identifier", "Identifier"),
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("key")], {}, {}),
          close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
  }
  *MappingAttribute() {
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`tokenFlag`, _t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          tokenFlag: _t.s_i_node(_l.Spamex, "Punctuator", "*"),
          language: _t.s_node(_l.Spamex, "Identifier", "CSTML"),
          namespaceOperator: _t.s_i_node(_l.Spamex, "Punctuator", ":"),
          type: _t.s_node(_l.Spamex, "Identifier", "Identifier"),
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("key")], {}, {}),
          close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`tokenFlag`, _t.ref`type`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`intrinsicValue`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          tokenFlag: _t.s_i_node(_l.Spamex, "Punctuator", "*"),
          type: _t.s_node(_l.Spamex, "Identifier", "Punctuator"),
          intrinsicValue: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("=")], {}, {}),
            close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
          }, {}),
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("mapOperator")], {}, {}),
          close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          language: _t.s_node(_l.Spamex, "Identifier", "CSTML"),
          namespaceOperator: _t.s_i_node(_l.Spamex, "Punctuator", ":"),
          type: _t.s_node(_l.Spamex, "Identifier", "String"),
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("value")], {}, {}),
          close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
  }
  *StringMatcher() {
    if (yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "match"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Regex, "Pattern", [_t.ref`open`, _t.ref`alternatives[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Regex, "Punctuator", "/"),
          alternatives: [_t.node(_l.Regex, "Alternative", [_t.ref`elements[]`], {
            elements: [_t.node(_l.Regex, "CharacterClass", [_t.ref`open`, _t.ref`elements[]`, _t.ref`elements[]`, _t.ref`close`], {
              open: _t.s_i_node(_l.Regex, "Punctuator", "["),
              elements: [_t.node(_l.Regex, "Character", [_t.lit("'")], {}, {}), _t.node(_l.Regex, "Character", [_t.lit("\"")], {}, {})],
              close: _t.s_i_node(_l.Regex, "Punctuator", "]")
            }, {})]
          }, {})],
          close: _t.s_i_node(_l.Regex, "Punctuator", "/")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {})) {
      yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
        verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
        arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
          values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`, _t.ref`close`], {
            open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
            language: _t.s_node(_l.Spamex, "Identifier", "CSTML"),
            namespaceOperator: _t.s_i_node(_l.Spamex, "Punctuator", ":"),
            type: _t.s_node(_l.Spamex, "Identifier", "String"),
            close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
          }, {})],
          close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
        }, {})
      }, {});
    } else {
      yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
        verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
        arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
          values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`, _t.ref`close`], {
            open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
            language: _t.s_node(_l.Spamex, "Identifier", "Regex"),
            namespaceOperator: _t.s_i_node(_l.Spamex, "Punctuator", ":"),
            type: _t.s_node(_l.Spamex, "Identifier", "Pattern"),
            close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
          }, {})],
          close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
        }, {})
      }, {});
    }
  }
  *String() {
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          language: _t.s_node(_l.Spamex, "Identifier", "CSTML"),
          namespaceOperator: _t.s_i_node(_l.Spamex, "Punctuator", ":"),
          type: _t.s_node(_l.Spamex, "Identifier", "String"),
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
  }
  *Regex() {
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`tokenFlag`, _t.ref`type`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`intrinsicValue`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`attributes[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          tokenFlag: _t.s_i_node(_l.Spamex, "Punctuator", "*"),
          type: _t.s_node(_l.Spamex, "Identifier", "Punctuator"),
          intrinsicValue: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("/")], {}, {}),
            close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
          }, {}),
          attributes: [_t.node(_l.Spamex, "MappingAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
            key: _t.node(_l.Spamex, "Literal", [_t.lit("balanced")], {}, {}),
            mapOperator: _t.s_i_node(_l.Spamex, "Punctuator", "="),
            value: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
              content: _t.node(_l.CSTML, "Content", [_t.lit("/")], {}, {}),
              close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
            }, {})
          }, {})],
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("open")], {}, {}),
          close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          language: _t.s_node(_l.Spamex, "Identifier", "Regex"),
          namespaceOperator: _t.s_i_node(_l.Spamex, "Punctuator", ":"),
          type: _t.s_node(_l.Spamex, "Identifier", "Alternatives"),
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("alternatives[]")], {}, {}),
          close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`tokenFlag`, _t.ref`type`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`intrinsicValue`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`attributes[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          tokenFlag: _t.s_i_node(_l.Spamex, "Punctuator", "*"),
          type: _t.s_node(_l.Spamex, "Identifier", "Punctuator"),
          intrinsicValue: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("/")], {}, {}),
            close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
          }, {}),
          attributes: [_t.node(_l.Spamex, "BooleanAttribute", [_t.ref`key`], {
            key: _t.node(_l.Spamex, "Literal", [_t.lit("balancer")], {}, {})
          }, {})],
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("close")], {}, {}),
          close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          language: _t.s_node(_l.Spamex, "Identifier", "Regex"),
          namespaceOperator: _t.s_i_node(_l.Spamex, "Punctuator", ":"),
          type: _t.s_node(_l.Spamex, "Identifier", "Flags"),
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("flags")], {}, {}),
          close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
  }
  List() {}
  Match() {}
  Punctuator() {}
});
