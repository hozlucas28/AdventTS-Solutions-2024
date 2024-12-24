# Challenge 22

> _[🎅 Santa, bursting into the workshop, waving a piece of paper frantically]_ EMERGENCY! The sleigh's navigation system is sending messages about some kind of critical malfunction but I can't make heads or tails of it!\
> \
> _[🎩 Bernard, grabbing the paper]_ Let me see that... Oh no. OH NO. It looks like JSON, but... with TRAILING COMMAS!? It's a MESS!\
> \
> _[⚡ Blitzen, peering over their shoulders]_ Can't we just use `JSON.parse()`?\
> \
> _[🎩 Bernard, gasps in horror]_ And risk a runtime error at 30,000 feet? On CHRISTMAS EVE?! We need something type-safe. Something that can catch these issues as early as possible. Something...\
> \
> _[🎅 Santa, interrupting]_ Just fix it! If we can't parse these messages correctly, we might end up delivering presents to fish in the Pacific Ocean instead of children in the Pacific Northwest!

The elves need your help to build a type-safe JSON parser that can decode these critical messages from the sleigh! The parser should convert JSON strings into their equivalent TypeScript types, catching any errors as early as possible.

For example:

```ts
type test = Parse<`{
  "altitude": 123,
  "warnings": [
    "low_fuel",\t\n
    "strong_winds",
  ],
}`>

// Should become:
type test = {
	altitude: 123
	warnings: ['low_fuel', 'strong_winds']
}
```

The parser MUST handle:

- Objects with string/number keys and any JSON value
- Arrays with mixed types
- Primitive values (strings, numbers, booleans, null)
- Nested objects and arrays
- Those dreaded trailing commas in objects and arrays
- Various amounts of whitespace and newlines

<details>
<summary>Hint</summary>
Break this challenge into smaller parts, parsing each part of the JSON structure one at a time and building up to the full parser.
</details>

## Expected Behavior

```ts
type Test01 = Parse<`{
    "a": 1,
    "b": false,
    "c": [
      true,
      false,
      "hello",
      {
        "a": "b",
        "b": false
      },
    ],
    "nil": null,
  }`>
/**
 * => {
 *      a: 1,
 *      b: false,
 *      c: [true, false, 'hello', { a: 'b', b: false }],
 *      nil: null
 *    }
 */

type Test02 = Parse<'1'> // => 1

type Test03 = Parse<'{}'> // => {}

type Test04 = Parse<'[]'> // => []

type Test05 = Parse<'[1]'> // => [1]

type Test06 = Parse<'true'> // => true

type Test07 = Parse<'["Hello", true, false, null]'> // => ['Hello', true, false, null]

type Test08 = Parse<`{"hello\\r\\n\\b\\f": "world"}`> // => { 'hello\r\n\b\f': 'world' }

type Test09 = Parse<'{ 1: "world" }'> // => { 1: 'world' }

type Test10 = Parse<`{
  "altitude": 123,
  "warnings": [
    "low_fuel",\t\n
    "strong_winds",
  ],
}`>
/**
 * => {
 *      altitude: 123
 *      warnings: ['low_fuel', 'strong_winds']
 *    }
 */
```

> Prompt by [Travis Wagner](https://github.com/trvswgnr).

> Code by [Dimitri Mitropoulos](https://github.com/dimitropoulos) on behalf of [SquiggleConf](https://squiggleconf.com/).
