import * as regex from '@bablr/miniparser-language-nonbacktracking-js-regex';

const _ = /[ \t]+/y;

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

export class MatchableMiniparserGrammar {
  constructor() {
    this.aliases = new Map([
      [node, new Set(['TokenGapTag', 'NodeGapTag', 'Attribute', 'String', 'Regex'])],
    ]);
  }

  Matchable(p) {
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
    } else if (p.match('<|') || p.match('<|+') || p.match('<| |>')) {
      return p.eatProduction('TokenGapTag');
    } else if (p.match('<!')) {
      throw new Error('doctype tag syntax is illegal in grammar definitions');
    } else if (p.match('</')) {
      throw new Error('close tag syntax is illegal in grammar definitions');
    } else if (p.match('<[')) {
      throw new Error('gap tag syntax is illegal in grammar definitions');
    } else if (p.match('<+') || p.match(/<(?:\w|$)/y)) {
      return p.eatProduction('NodeGapTag');
    } else {
      throw new Error(`Unexpected character ${p.chr}`);
    }
  }

  TokenBooleanGapTag(p) {
    p.eat('<|+');
    p.eatMatch(_);

    const type = p.eat(/\w+/y);

    let sp = p.eatMatch(_);

    const matchables = [];

    while (sp && !p.match('|>')) {
      matchables.push(p.eatProduction('Matchable'));
      sp = p.eatMatch(_);
    }

    p.eat('|>');

    return {
      type,
      value: undefined,
      attrs: [p.node('Attribute', { key: 'matchables', value: matchables })],
    };
  }

  // @Node
  TokenGapTag(p) {
    if (p.match('<| |>')) {
      return { type: 'Trivia', value: undefined, attrs: [] };
    }

    if (p.match('<|+')) {
      return p.eatProduction('TokenBooleanGapTag');
    }

    p.eat('<|');
    p.eatMatch(_);

    const type = p.eatProduction('Identifier');

    let sp = p.eatMatch(_);

    let value = null;
    if (sp && /['"]/y.test(p.chr)) {
      value = p.eatProduction('String');
    } else if (sp && p.chr === '/') {
      value = p.eatProduction('Regex');
    }

    sp = value ? p.eatMatch(_) : sp;

    const attrs = p.eatProduction('Attributes');

    if (attrs) {
      p.eatMatch(_);
    }
    p.eat('|>');

    return { type, value, attrs };
  }

  NodeBooleanGapTag(p) {
    p.eat('<+');
    p.eatMatch(_);

    const type = p.eat(/\w+/y);

    let sp = p.eatMatch(_);

    const matchables = [];

    while (sp) {
      matchables.push(p.eatProduction('Tag'));
      sp = p.eatMatch(_);
    }

    p.eat('>');

    return {
      type,
      value: undefined,
      attrs: [p.node('Attribute', { key: 'matchables', value: matchables })],
    };
  }

  // @Node
  NodeGapTag(p) {
    if (p.match('<+')) {
      return p.eatProduction('NodeBooleanGapTag');
    }

    p.eat('<');

    const type = p.eatProduction('Identifier');

    const sp = p.eatMatch(_);

    const attrs = sp ? p.eatProduction('Attributes') : [];

    p.eatMatch(_);

    p.eat('>');

    return { type, attrs };
  }

  Attributes(p) {
    const attrs = [];
    let sp = true;
    while (sp && !p.done) {
      attrs.push(...p.eatProductions('Attribute'));
      sp = p.eatMatch(_);
    }
    return attrs;
  }

  // @Node
  Attribute(p) {
    const key = p.eat(/\w+/y);
    p.eatMatch(_);
    p.eat('=');
    p.eatMatch(_);
    const value = p.eatProduction('Matchable');

    return { key, value };
  }

  Identifier(p) {
    return p.eat(/\w+/y);
  }

  // @Node
  String(p) {
    const q = p.eat(/['"]/y);

    const raw = p.eat(q === '"' ? /[^\n"]*/y : /[^\n']*/y);

    p.eat(q);

    return { value: parseString(raw) };
  }

  // @Node
  Regex(p) {
    p.pushLanguage(regex);
    const value = p.eatProduction('RegExpLiteral');
    p.popLanguage();
    return { value };
  }
}
