import * as regex from '@bablr/miniparser-language-nonbacktracking-js-regex';

const _ = /\s+/y;

const node = Symbol.for('@bablr/node');

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

export class SpamexMiniparserGrammar {
  constructor() {
    this.aliases = new Map([
      [
        node,
        new Set(['TokenTag', 'NodeTag', 'Attribute', 'Argument', 'String', 'Regex', 'Expression']),
      ],
      ['Expression', new Set(['TokenTag', 'NodeTag', 'String', 'Regex'])],
    ]);
  }

  // @Node
  Expression(p) {
    if (p.match('<')) {
      return p.eatProduction('Tag');
    } else if (p.match(/['"]/y)) {
      return p.eatProduction('String');
    } else if (p.match('/')) {
      return p.eatProduction('Regex');
    } else {
      throw new Error(`Unexpected character ${p.chr}`);
    }
  }

  Tag(p) {
    if (p.match('<|[')) {
      throw new Error('gap token syntax is illegal in grammar definitions');
    } else if (p.match('<|') || p.match('<| |>')) {
      return p.eatProduction('TokenTag');
    } else if (p.match('<!')) {
      throw new Error('doctype tag syntax is illegal in grammar definitions');
    } else if (p.match('</')) {
      throw new Error('close tag syntax is illegal in grammar definitions');
    } else if (p.match('<[')) {
      throw new Error('gap tag syntax is illegal in grammar definitions');
    } else if (p.match(/<(?:\w|$)/y)) {
      return p.eatProduction('NodeTag');
    } else {
      throw new Error(`Unexpected character ${p.chr}`);
    }
  }

  // @Node
  TokenTag(p) {
    p.eat('<|', { startSpan: 'Tag', balanced: '|>' });
    p.eatMatch(_);

    if (p.eatMatch('|>', { endSpan: 'Tag' })) {
      return { tagType: 'Trivia', value: undefined, attrs: [] };
    }

    const tagType = p.eatProduction('Identifier');

    let sp = p.eatMatch(_);

    let value = null;
    if (sp && /['"]/y.test(p.chr)) {
      value = p.eatProduction('String');
    } else if (sp && p.chr === '/') {
      value = p.eatProduction('Regex');
    }

    sp = value ? p.eatMatch(_) : sp;

    const attrs = sp ? p.eatProduction('Attributes') : [];

    sp = attrs.length ? p.eatMatch(_) : sp;

    const args = sp && p.match('{') ? p.eatProduction('Arguments') : [];

    p.eatMatch(_);
    p.eat('|>', { endSpan: 'Tag' });

    return { tagType, value, attrs, args };
  }

  // @Node
  NodeTag(p) {
    p.eat('<', { startSpan: 'Tag', balanced: '>' });

    const tagType = p.eatProduction('Identifier');

    let sp = p.eatMatch(_);

    const attrs = sp ? p.eatProduction('Attributes') : [];

    sp = attrs.length ? p.eatMatch(_) : sp;

    const args = sp && p.match('{') ? p.eatProduction('Arguments') : [];

    p.eatMatch(_);
    p.eat('>', { endSpan: 'Tag' });

    return { tagType, attrs, args };
  }

  Attributes(p) {
    const attrs = [];
    let first = true;
    // ew
    while ((first || (p.match(/\s+\w/y) && p.eatMatch(/\s+/y))) && !p.done && p.match(/\w/y)) {
      attrs.push(...p.eatProductions('Attribute'));
      first = false;
    }
    return attrs;
  }

  // @Node
  Attribute(p) {
    const key = p.eat(/\w+/y);
    p.eatMatch(_);
    p.eat('=');
    p.eatMatch(_);
    const str = p.eatProduction('String');

    return { key, value: str.value };
  }

  Arguments(p) {
    const args = [];

    const aQuote = p.match('{[');

    const oQuote = aQuote ? '{[' : '{';
    const cQuote = aQuote ? ']}' : '}';
    const spanSuffix = aQuote ? ':Expressions' : '';
    const span = `Tag:Arguments${spanSuffix}`;

    p.eat(oQuote, { balanced: cQuote, startSpan: span });

    p.eatMatch(_);

    let first = true;
    while ((first || p.eatMatch(/\s*,\s*/y)) && !p.done) {
      args.push(...p.eatProductions(aQuote ? 'Expression' : 'Argument'));
      first = false;
    }

    p.eatMatch(_);

    p.eat(cQuote, { endSpan: span });

    return aQuote ? [p.node('Argument', { key: 'expressions', value: args })] : args;
  }

  // @Node
  Argument(p) {
    const key = p.eat(/\w+/y);
    p.eatMatch(_);
    p.eat(':');
    p.eatMatch(_);
    const value = p.eatProduction('Expression');

    return { key, value };
  }

  Identifier(p) {
    return p.eat(/\w+/y);
  }

  // @Node
  String(p) {
    const q = p.eat(/['"]/y);

    const raw = p.eatMatch(q === '"' ? /[^\n"]*/y : /[^\n']*/y);

    p.eat(q);

    return { value: parseString(raw) };
  }

  // @Node
  Regex(p) {
    p.pushLanguage(regex);
    p.eat('/', { startSpan: 'Expression', balanced: '/' });
    const pattern = p.eatProduction('Pattern');
    p.eat('/', { endSpan: 'Expression' });
    const flags = p.eatProduction('Flags');
    p.popLanguage();
    return { pattern, flags: { ...flags, sticky: true } };
  }
}
