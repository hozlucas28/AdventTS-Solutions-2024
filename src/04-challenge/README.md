# Challenge 04

When 🎅 Santa uses this function, sometimes he'll want to pass a number, like `survivalRatio(2009)` and if he wants a specific quarter he'll pass `survivalRatio('2009 Q2')`. Our function needs to be able to handle both of these data types, not just `number`s.

<details>
<summary>Hint</summary>
When you hear words like "both" you should start thinking about a TypeScript feature called <i>type unions</i>. This special TypeScript syntax allows you to tell TypeScript that a variable might be one of multiple different data types, in this case <code>number</code> and <code>string</code>.
</details>

## Expected Behavior

```ts
// We can pass numbers like `2009`...

const start = survivalRatio(2009)

type Actual01 = typeof start // number
type Expected01 = number // number

const now = survivalRatio(2024)

type Actual02 = typeof now // number
type Expected02 = number // number

// We can pass strings like `'2009 Q2'`...

const Q1_2009 = survivalRatio('2009 Q1')

type Actual03 = typeof Q1_2009 // number
type Expected03 = number // number

const Q2_2024 = survivalRatio('2024 Q2')

type Actual04 = typeof Q2_2024 // number
type Expected04 = number // number

// Other data types are not allowed by TypeScript...

// @ts-expect-error
survivalRatio(true)

// @ts-expect-error
survivalRatio([1])

// @ts-expect-error
survivalRatio({ 1: 1 })
```

> Prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [Michigan TypeScript](https://michigantypescript.com/).

> Code by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [SquiggleConf](https://squiggleconf.com/).
