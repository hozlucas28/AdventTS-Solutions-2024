# Challenge 04

> _[🎩 Bernard (the head elf) presenting data to 🎅 Santa showing how much harder it is for the Reindeer to make a living with their wages not changing since 2009 at the same time as housing prices rising dramatically AND high inflation over that period.]_\
> \
> _[🎅 Santa]_ FAKE DATA!! THIS IS FAKE DATA!!!!! A FAKE DATA WITCH HUNT!!!\
> \
> _[🎩 Bernard]_ Oh, sure, 🎅 Santa, I spent all night cooking the books just to screw over a guy who still thinks Excel is a type of sleigh polish.\
> \
> _[🎅 Santa]_ I've been around the block a few times, 🎩 Bernard. I know the trick you're pulling here. We're a seasonal business. You only gave me numbers for Q1 of every year. But that's when our economy is always depressed after the height of the holiday season!\
> \
> _[🎩 Bernard]_ I can't believe they let you run this place... 🎅 Santa.. 🎅 SANTA!!... We maintain a huge budgetary deficit that literally only ever seems to get larger and larger. These numbers are not affected by the seasonality of our business.\
> \
> _[🎅 Santa]_ I want to be able to give quarterly numbers. And since 1975.\
> \
> _[🎩 Bernard]_ This is the last time I'm doing this for you. You're going to need to face the music.. and pretty soon!

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
