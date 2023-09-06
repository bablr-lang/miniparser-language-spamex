import { expect } from 'expect';
import { parse as miniparse, print } from '@bablr/miniparser';
import * as spamex from '@bablr/miniparser-language-spamex';

const emptyRegex = {
  type: 'Regex',
  pattern: {
    type: 'Pattern',
    alternatives: [
      {
        type: 'Alternative',
        elements: [],
      },
    ],
  },
  flags: {
    type: 'Flags',
    dotAll: false,
    global: false,
    ignoreCase: false,
    multiline: false,
    sticky: true,
    unicode: false,
  },
};

describe('SPAM Expressions', () => {
  describe('parse', () => {
    const parse = (text) => miniparse(spamex, text, 'Expression', { monomorphic: false });
    it('[empty] throws', () => {
      expect(() => parse('')).toThrowError();
    });

    describe('TokenTag', () => {
      it('<|ID|>', () => {
        expect(parse('<|ID|>')).toEqual({
          type: 'TokenTag',
          tagType: 'ID',
          value: null,
          attrs: [],
          args: [],
        });
      });

      it('<| ID |>', () => {
        expect(parse('<| ID |>')).toEqual({
          type: 'TokenTag',
          tagType: 'ID',
          value: null,
          attrs: [],
          args: [],
        });
      });

      it(`<| ID'' |> throws`, () => {
        expect(() => parse(`<| ID'' |>`)).toThrowError();
      });

      it(`<| ID '' |>`, () => {
        expect(parse(`<| ID '' |>`)).toEqual({
          type: 'TokenTag',
          tagType: 'ID',
          value: { type: 'String', value: '' },
          attrs: [],
          args: [],
        });
      });

      it(`<| ID 'foo' |>`, () => {
        expect(parse(`<| ID 'foo' |>`)).toEqual({
          type: 'TokenTag',
          tagType: 'ID',
          value: { type: 'String', value: 'foo' },
          attrs: [],
          args: [],
        });
      });

      it(`<| ID // |>`, () => {
        expect(parse(`<| ID // |>`)).toEqual({
          type: 'TokenTag',
          tagType: 'ID',
          value: emptyRegex,
          attrs: [],
          args: [],
        });
      });

      it(`<| ID /of/ |>`, () => {
        expect(parse(`<| ID /of/ |>`)).toEqual({
          type: 'TokenTag',
          tagType: 'ID',
          value: {
            type: 'Regex',
            pattern: {
              type: 'Pattern',
              alternatives: [
                {
                  type: 'Alternative',
                  elements: [
                    {
                      type: 'Character',
                      value: 'o',
                    },
                    {
                      type: 'Character',
                      value: 'f',
                    },
                  ],
                },
              ],
            },
            flags: {
              type: 'Flags',
              dotAll: false,
              global: false,
              ignoreCase: false,
              multiline: false,
              sticky: true,
              unicode: false,
            },
          },
          attrs: [],
          args: [],
        });
      });

      it(`<| ID foo='bar' |>`, () => {
        expect(parse(`<| ID foo='bar' |>`)).toEqual({
          type: 'TokenTag',
          tagType: 'ID',
          value: null,
          attrs: [{ type: 'Attribute', key: 'foo', value: 'bar' }],
          args: [],
        });
      });

      it(`<| ID foo='bar'baz='quux' |> throws`, () => {
        expect(() => parse(`<| ID foo='bar'baz='quux' |>`)).toThrowError();
      });

      it(`<| ID foo='bar' baz='quux' |>`, () => {
        expect(parse(`<| ID foo='bar' baz='quux' |>`)).toEqual({
          type: 'TokenTag',
          tagType: 'ID',
          value: null,
          attrs: [
            { type: 'Attribute', key: 'foo', value: 'bar' },
            { type: 'Attribute', key: 'baz', value: 'quux' },
          ],
          args: [],
        });
      });

      it(`<| ID 'moof'vroom='graarrr' |> throws`, () => {
        expect(() => parse(`<| ID 'moof'vroom='graarrr' |>`)).toThrowError();
      });

      it(`<| ID 'moof' vroom='graarrr' |>`, () => {
        expect(parse(`<| ID 'moof' vroom='graarrr' |>`)).toEqual({
          type: 'TokenTag',
          tagType: 'ID',
          value: { type: 'String', value: 'moof' },
          attrs: [{ type: 'Attribute', key: 'vroom', value: 'graarrr' }],
          args: [],
        });
      });

      it(`<| ID {} |>`, () => {
        expect(parse(`<| ID {} |>`)).toEqual({
          type: 'TokenTag',
          tagType: 'ID',
          value: null,
          attrs: [],
          args: [],
        });
      });

      it(`<| ID {foo:'bar'} |>`, () => {
        expect(parse(`<| ID {foo:'bar'} |>`)).toEqual({
          type: 'TokenTag',
          tagType: 'ID',
          value: null,
          attrs: [],
          args: [{ type: 'Argument', key: 'foo', value: { type: 'String', value: 'bar' } }],
        });
      });

      it(`<| ID { foo: 'bar' } |>`, () => {
        expect(parse(`<| ID { foo: 'bar' } |>`)).toEqual({
          type: 'TokenTag',
          tagType: 'ID',
          value: null,
          attrs: [],
          args: [{ type: 'Argument', key: 'foo', value: { type: 'String', value: 'bar' } }],
        });
      });

      it(`<| ID 'ok'{ foo: 'bar' } |> throws`, () => {
        expect(() => parse(`<| ID 'ok'{ foo: 'bar' } |>`)).toThrowError();
      });

      it(`<| ID 'ok' { foo: 'bar' } |>`, () => {
        expect(parse(`<| ID 'ok' { foo: 'bar' } |>`)).toEqual({
          type: 'TokenTag',
          tagType: 'ID',
          value: { type: 'String', value: 'ok' },
          attrs: [],
          args: [{ type: 'Argument', key: 'foo', value: { type: 'String', value: 'bar' } }],
        });
      });

      it(`<| ID foo='bar'{ foo: 'bar' } |> throws`, () => {
        expect(() => parse(`<| ID foo='bar'{ foo: 'bar' } |>`)).toThrowError();
      });

      it(`<| ID foo='bar' { foo: 'bar' } |>`, () => {
        expect(parse(`<| ID foo='bar' { foo: 'bar' } |>`)).toEqual({
          type: 'TokenTag',
          tagType: 'ID',
          value: null,
          attrs: [{ type: 'Attribute', key: 'foo', value: 'bar' }],
          args: [{ type: 'Argument', key: 'foo', value: { type: 'String', value: 'bar' } }],
        });
      });

      it(`<| ID { kw: <| KW |>, re: // } |>`, () => {
        expect(parse(`<| ID { kw: <| KW |>, re: // } |>`)).toEqual({
          type: 'TokenTag',
          tagType: 'ID',
          value: null,
          attrs: [],
          args: [
            {
              type: 'Argument',
              key: 'kw',
              value: { type: 'TokenTag', tagType: 'KW', value: null, attrs: [], args: [] },
            },
            { type: 'Argument', key: 're', value: emptyRegex },
          ],
        });
      });
    });

    describe('NodeTag', () => {
      it('< ID > throws', () => {
        expect(() => parse('< ID >')).toThrowError();
      });

      it('<ID>', () => {
        expect(parse('<ID>')).toEqual({
          type: 'NodeTag',
          tagType: 'ID',
          attrs: [],
          args: [],
        });
      });

      it(`<ID foo='bar'>`, () => {
        expect(parse(`<ID foo='bar'>`)).toEqual({
          type: 'NodeTag',
          tagType: 'ID',
          attrs: [{ type: 'Attribute', key: 'foo', value: 'bar' }],
          args: [],
        });
      });

      it(`<ID foo='bar'baz='quux'> throws`, () => {
        expect(() => parse(`<ID foo='bar'baz='quux'>`)).toThrowError();
      });

      it(`<ID foo='bar' baz='quux'>`, () => {
        expect(parse(`<ID foo='bar' baz='quux'>`)).toEqual({
          type: 'NodeTag',
          tagType: 'ID',
          attrs: [
            { type: 'Attribute', key: 'foo', value: 'bar' },
            { type: 'Attribute', key: 'baz', value: 'quux' },
          ],
          args: [],
        });
      });

      it(`<ID {}>`, () => {
        expect(parse(`<ID {}>`)).toEqual({
          type: 'NodeTag',
          tagType: 'ID',
          attrs: [],
          args: [],
        });
      });

      it(`<ID {foo:'bar'}>`, () => {
        expect(parse(`<ID {foo:'bar'}>`)).toEqual({
          type: 'NodeTag',
          tagType: 'ID',
          attrs: [],
          args: [{ type: 'Argument', key: 'foo', value: { type: 'String', value: 'bar' } }],
        });
      });

      it(`<ID { foo: 'bar' }>`, () => {
        expect(parse(`<ID { foo: 'bar' }>`)).toEqual({
          type: 'NodeTag',
          tagType: 'ID',
          attrs: [],
          args: [{ type: 'Argument', key: 'foo', value: { type: 'String', value: 'bar' } }],
        });
      });

      it(`<ID foo='bar'{ foo: 'bar' }> throws`, () => {
        expect(() => parse(`<ID foo='bar'{ foo: 'bar' }>`)).toThrowError();
      });

      it(`<ID foo='bar' { foo: 'bar' }>`, () => {
        expect(parse(`<ID foo='bar' { foo: 'bar' }>`)).toEqual({
          type: 'NodeTag',
          tagType: 'ID',
          attrs: [{ type: 'Attribute', key: 'foo', value: 'bar' }],
          args: [{ type: 'Argument', key: 'foo', value: { type: 'String', value: 'bar' } }],
        });
      });

      it(`<ID { kw: <KW>, re: // }>`, () => {
        expect(parse(`<ID { kw: <KW>, re: // }>`)).toEqual({
          type: 'NodeTag',
          tagType: 'ID',
          attrs: [],
          args: [
            {
              type: 'Argument',
              key: 'kw',
              value: { type: 'NodeTag', tagType: 'KW', attrs: [], args: [] },
            },
            { type: 'Argument', key: 're', value: emptyRegex },
          ],
        });
      });
    });
  });
});

describe('printing spamex', () => {});
