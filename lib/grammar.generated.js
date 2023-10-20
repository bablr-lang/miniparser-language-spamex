import _applyDecs from "@babel/runtime/helpers/applyDecs2305";
import * as _t from "@bablr/boot-helpers/types";
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _initProto;
import { Node, Cover, CoveredBy } from '@bablr/boot-helpers/decorators';
import * as regex from '@bablr/language-regex-vm-pattern';
import * as string from '@bablr/language-cstml-string';
export const name = 'Spamex';
export const dependencies = new Map([['Regex', regex], ['String', string]]);
export const grammar = (_dec = CoveredBy('Expression'), _dec2 = CoveredBy('Matcher'), _dec3 = CoveredBy('Expression'), _dec4 = CoveredBy('Matcher'), _dec5 = CoveredBy('Expression'), _dec6 = CoveredBy('Matcher'), _dec7 = CoveredBy('Expression'), _dec8 = CoveredBy('Attribute'), _dec9 = CoveredBy('Attribute'), _dec10 = CoveredBy('TagType'), _dec11 = CoveredBy('TagType'), _dec12 = CoveredBy('Expression'), _dec13 = CoveredBy('Matcher'), _dec14 = CoveredBy('Expression'), _dec15 = CoveredBy('StringMatcher'), _dec16 = CoveredBy('Matcher'), _dec17 = CoveredBy('Expression'), _dec18 = CoveredBy('StringMatcher'), _dec19 = CoveredBy('Matcher'), _dec20 = CoveredBy('Expression'), class SpamexGrammar {
  static {
    [_initProto] = _applyDecs(this, [[[_dec, Cover], 2, "Matcher"], [Cover, 2, "Expression"], [[_dec2, _dec3, Node], 2, "TriviaTokenMatcher"], [[_dec4, _dec5, Node], 2, "NodeMatcher"], [[_dec6, _dec7, Node], 2, "TokenMatcher"], [Cover, 2, "Attribute"], [[_dec8, Node], 2, "KeyAttribute"], [[_dec9, Node], 2, "KeyValueAttribute"], [Cover, 2, "Props"], [Node, 2, "MatchablesArrayProps"], [Node, 2, "ObjectProps"], [Node, 2, "Argument"], [Cover, 2, "TagType"], [[_dec10, Node], 2, "GlobalIdentifier"], [[_dec11, Node], 2, "Identifier"], [[_dec12, Node], 2, "Boolean"], [[_dec13, _dec14, Cover], 2, "StringMatcher"], [[_dec15, _dec16, _dec17, Node], 2, "String"], [[_dec18, _dec19, _dec20, Node], 2, "Regex"]], []).e;
  }
  constructor(...args) {
    _initProto(this);
  }
  *Matcher() {}
  *Expression() {}
  *TriviaTokenMatcher() {
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`'`], {}),
          value: _t.node("Literal", [_t.str`<|`], {}),
          close: _t.node("Punctuator", [_t.str`'`], {})
        }),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`open`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        }), _t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`open`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        }), _t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`open`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Keyword`], {}),
        value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`'`], {}),
          value: _t.node("Literal", [_t.str` `], {}),
          close: _t.node("Punctuator", [_t.str`'`], {})
        }),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`value`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`'`], {}),
          value: _t.node("Literal", [_t.str`|>`], {}),
          close: _t.node("Punctuator", [_t.str`'`], {})
        }),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`close`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        }), _t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`close`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        }), _t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`close`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
  }
  *NodeMatcher() {
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`'`], {}),
          value: _t.node("Literal", [_t.str`<`], {}),
          close: _t.node("Punctuator", [_t.str`'`], {})
        }),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`open`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        }), _t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`open`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        }), _t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`open`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`[attrs]`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<`], {}),
        type: _t.node("Identifier", [_t.str`TagType`], {}),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`type`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<`], {}),
        type: _t.node("Identifier", [_t.str`All`], {}),
        props: _t.node("MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`{[`], {}),
          values: [_t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`<|`], {}),
            value: _t.node("Keyword", [_t.str` `], {}),
            close: _t.node("Punctuator", [_t.str`|>`], {})
          }), _t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`<|`], {}),
            value: _t.node("Keyword", [_t.str` `], {}),
            close: _t.node("Punctuator", [_t.str`|>`], {})
          })],
          close: _t.node("Punctuator", [_t.str`]}`], {})
        }),
        close: _t.node("Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<`], {}),
        type: _t.node("Identifier", [_t.str`All`], {}),
        props: _t.node("MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`{[`], {}),
          values: [_t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`<|`], {}),
            value: _t.node("Keyword", [_t.str` `], {}),
            close: _t.node("Punctuator", [_t.str`|>`], {})
          }), _t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`<|`], {}),
            value: _t.node("Keyword", [_t.str` `], {}),
            close: _t.node("Punctuator", [_t.str`|>`], {})
          })],
          close: _t.node("Punctuator", [_t.str`]}`], {})
        }),
        close: _t.node("Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        value: _t.node("Keyword", [_t.str` `], {}),
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`'`], {}),
          value: _t.node("Literal", [_t.str`>`], {}),
          close: _t.node("Punctuator", [_t.str`'`], {})
        }),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`close`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        }), _t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`close`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        }), _t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`close`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
  }
  *TokenMatcher() {
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`'`], {}),
          value: _t.node("Literal", [_t.str`<|`], {}),
          close: _t.node("Punctuator", [_t.str`'`], {})
        }),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`open`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        }), _t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`open`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        }), _t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`open`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        value: _t.node("Keyword", [_t.str` `], {}),
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`[attrs]`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<`], {}),
        type: _t.node("Identifier", [_t.str`TagType`], {}),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`type`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<`], {}),
        type: _t.node("Identifier", [_t.str`All`], {}),
        props: _t.node("MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`{[`], {}),
          values: [_t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`<|`], {}),
            value: _t.node("Keyword", [_t.str` `], {}),
            close: _t.node("Punctuator", [_t.str`|>`], {})
          }), _t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`<|`], {}),
            value: _t.node("Keyword", [_t.str` `], {}),
            close: _t.node("Punctuator", [_t.str`|>`], {})
          })],
          close: _t.node("Punctuator", [_t.str`]}`], {})
        }),
        close: _t.node("Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<`], {}),
        type: _t.node("Identifier", [_t.str`All`], {}),
        props: _t.node("MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`{[`], {}),
          values: [_t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`<|`], {}),
            value: _t.node("Keyword", [_t.str` `], {}),
            close: _t.node("Punctuator", [_t.str`|>`], {})
          }), _t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`<|`], {}),
            value: _t.node("Keyword", [_t.str` `], {}),
            close: _t.node("Punctuator", [_t.str`|>`], {})
          })],
          close: _t.node("Punctuator", [_t.str`]}`], {})
        }),
        close: _t.node("Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<`], {}),
        type: _t.node("Identifier", [_t.str`All`], {}),
        props: _t.node("MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`{[`], {}),
          values: [_t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`<|`], {}),
            value: _t.node("Keyword", [_t.str` `], {}),
            close: _t.node("Punctuator", [_t.str`|>`], {})
          }), _t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`<|`], {}),
            value: _t.node("Keyword", [_t.str` `], {}),
            close: _t.node("Punctuator", [_t.str`|>`], {})
          })],
          close: _t.node("Punctuator", [_t.str`]}`], {})
        }),
        close: _t.node("Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        value: _t.node("Keyword", [_t.str` `], {}),
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`'`], {}),
          value: _t.node("Literal", [_t.str`|>`], {}),
          close: _t.node("Punctuator", [_t.str`'`], {})
        }),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`close`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        }), _t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`close`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        }), _t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`close`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
  }
  *Attributes() {
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<`], {}),
        type: _t.node("Identifier", [_t.str`All`], {}),
        props: _t.node("MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`{[`], {}),
          values: [_t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`<|`], {}),
            value: _t.node("Keyword", [_t.str` `], {}),
            close: _t.node("Punctuator", [_t.str`|>`], {})
          }), _t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`<|`], {}),
            value: _t.node("Keyword", [_t.str` `], {}),
            close: _t.node("Punctuator", [_t.str`|>`], {})
          })],
          close: _t.node("Punctuator", [_t.str`]}`], {})
        }),
        close: _t.node("Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
  }
  *Attribute() {}
  *KeyAttribute() {
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Identifier`], {}),
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
  }
  *KeyValueAttribute() {
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Identifier`], {}),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`key`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        value: _t.node("Keyword", [_t.str` `], {}),
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`'`], {}),
          value: _t.node("Literal", [_t.str`=`], {}),
          close: _t.node("Punctuator", [_t.str`'`], {})
        }),
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        value: _t.node("Keyword", [_t.str` `], {}),
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`[attrs]`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<`], {}),
        type: _t.node("Identifier", [_t.str`String`], {}),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`value`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
  }
  *Props() {
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<`], {}),
        type: _t.node("Identifier", [_t.str`Any`], {}),
        props: _t.node("MatchablesArrayProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`{[`], {}),
          values: [_t.node("NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`<`], {}),
            type: _t.node("Identifier", [_t.str`MatchablesArrayProps`], {}),
            props: _t.node("ObjectProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
              open: _t.node("Punctuator", [_t.str`{`], {}),
              values: [_t.node("Argument", [_t.ref`key`, _t.ref`mapOperator`, _t.trivia` `, _t.ref`value`], {
                key: _t.node("Literal", [_t.str`guard`], {}),
                mapOperator: _t.node("Punctuator", [_t.str`:`], {}),
                value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                  open: _t.node("Punctuator", [_t.str`'`], {}),
                  value: _t.node("Literal", [_t.str`{[`], {}),
                  close: _t.node("Punctuator", [_t.str`'`], {})
                })
              })],
              close: _t.node("Punctuator", [_t.str`}`], {})
            }),
            close: _t.node("Punctuator", [_t.str`>`], {})
          }), _t.node("NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`props`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`<`], {}),
            type: _t.node("Identifier", [_t.str`MatchablesArrayProps`], {}),
            props: _t.node("ObjectProps", [_t.ref`open`, _t.trivia` `, _t.ref`[values]`, _t.trivia` `, _t.ref`close`], {
              open: _t.node("Punctuator", [_t.str`{`], {}),
              values: [_t.node("Argument", [_t.ref`key`, _t.ref`mapOperator`, _t.trivia` `, _t.ref`value`], {
                key: _t.node("Literal", [_t.str`guard`], {}),
                mapOperator: _t.node("Punctuator", [_t.str`:`], {}),
                value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                  open: _t.node("Punctuator", [_t.str`'`], {}),
                  value: _t.node("Literal", [_t.str`{[`], {}),
                  close: _t.node("Punctuator", [_t.str`'`], {})
                })
              })],
              close: _t.node("Punctuator", [_t.str`}`], {})
            }),
            close: _t.node("Punctuator", [_t.str`>`], {})
          })],
          close: _t.node("Punctuator", [_t.str`]}`], {})
        }),
        close: _t.node("Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
  }
  *MatchablesArrayProps() {
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`'`], {}),
          value: _t.node("Literal", [_t.str`{[`], {}),
          close: _t.node("Punctuator", [_t.str`'`], {})
        }),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`open`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        }), _t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`open`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    let sp = yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        value: _t.node("Keyword", [_t.str` `], {}),
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    while (sp && (yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`match`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("Regex", [_t.ref`open`, _t.ref`[alternatives]`, _t.ref`close`, _t.ref`flags`], {
        open: _t.node("Punctuator", [_t.str`/`], {}),
        alternatives: [_t.node("Alternative", [_t.ref`[elements]`], {
          elements: [_t.node("CharacterSet", [_t.ref`value`], {
            value: _t.node("Keyword", [_t.str`.`], {})
          })]
        })],
        close: _t.node("Punctuator", [_t.str`/`], {}),
        flags: _t.node("Flag", [_t.ref`value`], {
          value: _t.node("Keyword", [_t.str`s`], {})
        })
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    }))) {
      yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
        verb: _t.node("Identifier", [_t.str`eat`], {}),
        open: _t.node("Punctuator", [_t.str`(`], {}),
        argument: _t.node("NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`[attrs]`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`<`], {}),
          type: _t.node("Identifier", [_t.str`Matcher`], {}),
          attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
            key: _t.node("Literal", [_t.str`path`], {}),
            mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
            value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
              open: _t.node("Punctuator", [_t.str`'`], {}),
              value: _t.node("Literal", [_t.str`[values]`], {}),
              close: _t.node("Punctuator", [_t.str`'`], {})
            })
          })],
          close: _t.node("Punctuator", [_t.str`>`], {})
        }),
        close: _t.node("Punctuator", [_t.str`)`], {})
      });
      sp = yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
        verb: _t.node("Identifier", [_t.str`eatMatch`], {}),
        open: _t.node("Punctuator", [_t.str`(`], {}),
        argument: _t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`<|`], {}),
          value: _t.node("Keyword", [_t.str` `], {}),
          close: _t.node("Punctuator", [_t.str`|>`], {})
        }),
        close: _t.node("Punctuator", [_t.str`)`], {})
      });
    }
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`'`], {}),
          value: _t.node("Literal", [_t.str`]}`], {}),
          close: _t.node("Punctuator", [_t.str`'`], {})
        }),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`close`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        }), _t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`close`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
  }
  *ObjectProps() {
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`'`], {}),
          value: _t.node("Literal", [_t.str`{`], {}),
          close: _t.node("Punctuator", [_t.str`'`], {})
        }),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`open`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        }), _t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`open`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        value: _t.node("Keyword", [_t.str` `], {}),
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    let first = true;
    while ((first || (yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`match`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("Regex", [_t.ref`open`, _t.ref`[alternatives]`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`/`], {}),
        alternatives: [_t.node("Alternative", [_t.ref`[elements]`, _t.ref`[elements]`], {
          elements: [_t.node("Quantifier", [_t.ref`element`, _t.ref`value`], {
            element: _t.node("CharacterSet", [_t.ref`escape`, _t.ref`value`], {
              escape: _t.node("Punctuator", [_t.str`\\`], {}),
              value: _t.node("Keyword", [_t.str`s`], {})
            }),
            value: _t.node("Keyword", [_t.str`*`], {})
          }), _t.node("Quantifier", [_t.ref`element`, _t.ref`value`], {
            element: _t.node("CharacterSet", [_t.ref`escape`, _t.ref`value`], {
              escape: _t.node("Punctuator", [_t.str`\\`], {}),
              value: _t.node("Keyword", [_t.str`s`], {})
            }),
            value: _t.node("Keyword", [_t.str`*`], {})
          })]
        })],
        close: _t.node("Punctuator", [_t.str`/`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    }))) && (yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`match`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("Regex", [_t.ref`open`, _t.ref`[alternatives]`, _t.ref`close`, _t.ref`flags`], {
        open: _t.node("Punctuator", [_t.str`/`], {}),
        alternatives: [_t.node("Alternative", [_t.ref`[elements]`], {
          elements: [_t.node("CharacterSet", [_t.ref`value`], {
            value: _t.node("Keyword", [_t.str`.`], {})
          })]
        })],
        close: _t.node("Punctuator", [_t.str`/`], {}),
        flags: _t.node("Flag", [_t.ref`value`], {
          value: _t.node("Keyword", [_t.str`s`], {})
        })
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    }))) {
      if (!first) {
        yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
          verb: _t.node("Identifier", [_t.str`eatMatch`], {}),
          open: _t.node("Punctuator", [_t.str`(`], {}),
          argument: _t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`<|`], {}),
            value: _t.node("Keyword", [_t.str` `], {}),
            close: _t.node("Punctuator", [_t.str`|>`], {})
          }),
          close: _t.node("Punctuator", [_t.str`)`], {})
        });
        yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
          verb: _t.node("Identifier", [_t.str`eat`], {}),
          open: _t.node("Punctuator", [_t.str`(`], {}),
          argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`<|`], {}),
            type: _t.node("Identifier", [_t.str`Punctuator`], {}),
            value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
              open: _t.node("Punctuator", [_t.str`'`], {}),
              value: _t.node("Literal", [_t.str`,`], {}),
              close: _t.node("Punctuator", [_t.str`'`], {})
            }),
            attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
              key: _t.node("Literal", [_t.str`path`], {}),
              mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
              value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
                open: _t.node("Punctuator", [_t.str`'`], {}),
                value: _t.node("Literal", [_t.str`[separators]`], {}),
                close: _t.node("Punctuator", [_t.str`'`], {})
              })
            })],
            close: _t.node("Punctuator", [_t.str`|>`], {})
          }),
          close: _t.node("Punctuator", [_t.str`)`], {})
        });
        yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
          verb: _t.node("Identifier", [_t.str`eatMatch`], {}),
          open: _t.node("Punctuator", [_t.str`(`], {}),
          argument: _t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`<|`], {}),
            value: _t.node("Keyword", [_t.str` `], {}),
            close: _t.node("Punctuator", [_t.str`|>`], {})
          }),
          close: _t.node("Punctuator", [_t.str`)`], {})
        });
      }
      yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
        verb: _t.node("Identifier", [_t.str`eat`], {}),
        open: _t.node("Punctuator", [_t.str`(`], {}),
        argument: _t.node("NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`[attrs]`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`<`], {}),
          type: _t.node("Identifier", [_t.str`Argument`], {}),
          attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
            key: _t.node("Literal", [_t.str`path`], {}),
            mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
            value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
              open: _t.node("Punctuator", [_t.str`'`], {}),
              value: _t.node("Literal", [_t.str`[values]`], {}),
              close: _t.node("Punctuator", [_t.str`'`], {})
            })
          })],
          close: _t.node("Punctuator", [_t.str`>`], {})
        }),
        close: _t.node("Punctuator", [_t.str`)`], {})
      });
      first = false;
    }
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        value: _t.node("Keyword", [_t.str` `], {}),
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`'`], {}),
          value: _t.node("Literal", [_t.str`}`], {}),
          close: _t.node("Punctuator", [_t.str`'`], {})
        }),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`close`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        }), _t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`close`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
  }
  *Argument() {
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Identifier`], {}),
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        value: _t.node("Keyword", [_t.str` `], {}),
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`'`], {}),
          value: _t.node("Literal", [_t.str`:`], {}),
          close: _t.node("Punctuator", [_t.str`'`], {})
        }),
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eatMatch`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TriviaMatcher", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        value: _t.node("Keyword", [_t.str` `], {}),
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<`], {}),
        type: _t.node("Identifier", [_t.str`Expression`], {}),
        close: _t.node("Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
  }
  *TagType() {}
  *GlobalIdentifier() {
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`[attrs]`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<`], {}),
        type: _t.node("Identifier", [_t.str`Identifier`], {}),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`language`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`'`], {}),
          value: _t.node("Literal", [_t.str`:`], {}),
          close: _t.node("Punctuator", [_t.str`'`], {})
        }),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`mapOperator`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.trivia` `, _t.ref`[attrs]`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<`], {}),
        type: _t.node("Identifier", [_t.str`Identifier`], {}),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`type`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
  }
  *Identifier() {
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("Regex", [_t.ref`open`, _t.ref`[alternatives]`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`/`], {}),
        alternatives: [_t.node("Alternative", [_t.ref`[elements]`], {
          elements: [_t.node("Quantifier", [_t.ref`element`, _t.ref`value`], {
            element: _t.node("CharacterSet", [_t.ref`escape`, _t.ref`value`], {
              escape: _t.node("Punctuator", [_t.str`\\`], {}),
              value: _t.node("Keyword", [_t.str`w`], {})
            }),
            value: _t.node("Keyword", [_t.str`+`], {})
          })]
        })],
        close: _t.node("Punctuator", [_t.str`/`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
  }
  *Boolean() {
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Keyword`], {}),
        value: _t.node("Regex", [_t.ref`open`, _t.ref`[alternatives]`, _t.ref`[separators]`, _t.ref`[alternatives]`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`/`], {}),
          alternatives: [_t.node("Alternative", [_t.ref`[elements]`, _t.ref`[elements]`, _t.ref`[elements]`, _t.ref`[elements]`], {
            elements: [_t.node("Character", [_t.str`t`], {}), _t.node("Character", [_t.str`t`], {}), _t.node("Character", [_t.str`t`], {}), _t.node("Character", [_t.str`t`], {})]
          }), _t.node("Alternative", [_t.ref`[elements]`, _t.ref`[elements]`, _t.ref`[elements]`, _t.ref`[elements]`], {
            elements: [_t.node("Character", [_t.str`t`], {}), _t.node("Character", [_t.str`t`], {}), _t.node("Character", [_t.str`t`], {}), _t.node("Character", [_t.str`t`], {})]
          })],
          separators: [_t.node("Punctuator", [_t.str`|`], {})],
          close: _t.node("Punctuator", [_t.str`/`], {})
        }),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`value`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
  }
  StringMatcher() {}
  *String() {
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("NodeMatcher", [_t.ref`open`, _t.ref`language`, _t.ref`mapOperator`, _t.ref`type`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<`], {}),
        language: _t.node("Identifier", [_t.str`String`], {}),
        mapOperator: _t.node("Punctuator", [_t.str`:`], {}),
        type: _t.node("Identifier", [_t.str`String`], {}),
        close: _t.node("Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
  }
  *Regex() {
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`'`], {}),
          value: _t.node("Literal", [_t.str`/`], {}),
          close: _t.node("Punctuator", [_t.str`'`], {})
        }),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`open`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        }), _t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`open`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("NodeMatcher", [_t.ref`open`, _t.ref`language`, _t.ref`mapOperator`, _t.ref`type`, _t.trivia` `, _t.ref`[attrs]`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<`], {}),
        language: _t.node("Identifier", [_t.str`Regex`], {}),
        mapOperator: _t.node("Punctuator", [_t.str`:`], {}),
        type: _t.node("Identifier", [_t.str`Alternatives`], {}),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`[alternatives]`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("TokenMatcher", [_t.ref`open`, _t.trivia` `, _t.ref`type`, _t.trivia` `, _t.ref`value`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.ref`[attrs]`, _t.trivia` `, _t.trivia` `, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<|`], {}),
        type: _t.node("Identifier", [_t.str`Punctuator`], {}),
        value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
          open: _t.node("Punctuator", [_t.str`'`], {}),
          value: _t.node("Literal", [_t.str`/`], {}),
          close: _t.node("Punctuator", [_t.str`'`], {})
        }),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`close`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        }), _t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`close`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`|>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
    yield _t.node("Call", [_t.ref`verb`, _t.ref`open`, _t.ref`argument`, _t.ref`close`], {
      verb: _t.node("Identifier", [_t.str`eat`], {}),
      open: _t.node("Punctuator", [_t.str`(`], {}),
      argument: _t.node("NodeMatcher", [_t.ref`open`, _t.ref`language`, _t.ref`mapOperator`, _t.ref`type`, _t.trivia` `, _t.ref`[attrs]`, _t.ref`close`], {
        open: _t.node("Punctuator", [_t.str`<`], {}),
        language: _t.node("Identifier", [_t.str`Regex`], {}),
        mapOperator: _t.node("Punctuator", [_t.str`:`], {}),
        type: _t.node("Identifier", [_t.str`Flags`], {}),
        attrs: [_t.node("StringAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
          key: _t.node("Literal", [_t.str`path`], {}),
          mapOperator: _t.node("Punctuator", [_t.str`=`], {}),
          value: _t.node("String", [_t.ref`open`, _t.ref`value`, _t.ref`close`], {
            open: _t.node("Punctuator", [_t.str`'`], {}),
            value: _t.node("Literal", [_t.str`flags`], {}),
            close: _t.node("Punctuator", [_t.str`'`], {})
          })
        })],
        close: _t.node("Punctuator", [_t.str`>`], {})
      }),
      close: _t.node("Punctuator", [_t.str`)`], {})
    });
  }
});
