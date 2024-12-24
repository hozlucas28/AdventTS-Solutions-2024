# Challenge 24

> _[🎅 Santa]_ First the elves needed a code parser, then we had that JSON situation... I'm starting to see a pattern here.\
> \
> _[🎩 Bernard]_ We keep building one-off parsers for everything! Maybe we should create a reusable parsing system?\
> \
> _[🎅 Santa]_ Like some sort of parser factory? That's brilliant! We could use it for everything - toy specs, route planning... uh... everything!\
> \
> _[🎩 Bernard]_ Right... I'll get started on the design.

The elves need your help building a type-safe parser combinator system! Instead of creating individual parsers for each format, you'll create building blocks that can be combined to parse anything.

Here's how the elves want to use it:

```ts
// Define simple parsers
type DigitParser = Parse<Just, Digit>

// Combine into more complex parsers
type IntParser = Parse<MapResult, [Parse<Many1, DigitParser>, Join, StringToNumber]>

// Parse!
type Parsed = Parse<IntParser, '123.4ff'>['data'] // => 123
```

Implement all of these core parser combinators:

- `Choice` - Tries each parser in order until one succeeds
- `EOF` - Matches the end of input
- `Just` - Matches exactly one character/token
- `Left` - Matches the left parser
- `Many0` - Matches zero or more of the parser
- `Many1` - Matches one or more of the parser
- `MapResult` - Maps the parsed data using the provided mapper
- `Mapper` - A mapper is a function that transforms the parsed data
- `Maybe` - Matches zero or one of the parser
- `MaybeResult` - A result type for parsers that may fail
- `NoneOf` - Matches none of the characters/tokens
- `Pair` - Matches two parsers in sequence
- `Parse` - The core parser type
- `Parser` - A parser is a function that attempts to parse an input string
- `Right` - Matches the right parser
- `SepBy0` - Matches zero or more of the parser separated by the separator parser
- `Seq` - Matches two parsers in sequence

Each parser should return a result type containing:

- `success`: Whether the parse succeeded
- `data`: The parsed data
- `rest`: The remaining unparsed input

<details>
<summary>Hint</summary>
Your solution from Day 23 might be helpful here. Start with the simplest parsers and build up to more complex ones. Make use of anything that has already been implemented for you.
</details>

## Expected Behavior

```ts
type Test01 = Parse<JSONParser, '"hello"'>['data'] // => 'hello'

type Test02 = Parse<JSONParser, '"hello\nworld"'>['data'] // => 'hello\nworld'

type Test03 = Parse<JSONParser, '{"hello": "world"}'>['data'] // => { hello: 'world' }

type Test04 = Parse<JSONParser, '[1, "hello", null, 4, "world"]'>['data'] // => [1, 'hello', null, 4, 'world']

type Test05 = Parse<JSONParser, '{ "a": { "b": "c" } }'>['data'] // => { a: { b: 'c' } }

type Test06 = Parse<JSONParser, '[{ "foo": "bar" }, { "foo": "baz" }, { "foo": 123 }]'>['data'] // => [{ foo: 'bar' }, { foo: 'baz' }, { foo: 123 }]

type Test07 = Parse<JSONParser, '[1, 2, 3'>['success'] // => false

type Test08 = Parse<JSONParser, '{ foo: 123 }'>['success'] // => false

type Test09 = Parse<JSONParser, '{'>['success'] // => false

type Test10 = Parse<JSONParser, '[1, 2, 3,]'>['success'] // => false

type Test11 = Parse<JSONParser, '\\,'>['success'] // => false
```

> Prompt by [Travis Wagner](https://github.com/trvswgnr).

> Code by invakid404.
