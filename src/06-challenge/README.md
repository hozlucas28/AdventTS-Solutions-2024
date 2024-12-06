# Challenge 06

Clearly we need to constrain our generic type a bit to only allow specific data types. 🎅 Santa will probably also complain about that, but so it goes.

<details>
<summary>Hint</summary>
You might need to <i>"extend"</i> the solution from Day 4.
</details>

## Expected Behavior

```ts
const oneMill = createRoute('🌩️Donner', 100_000_000)

type Actual01 = typeof oneMill // => 100000000
type Expected01 = 100_000_000 // => 100000000

const two = createRoute('🔴Rudolph', 2)

type Actual02 = typeof two // => 2
type Expected02 = 2 // => 2

const three = createRoute('💨Dasher', '3')

type Actual03 = typeof three // => '3'
type Expected03 = '3' // => '3'

// @ts-expect-error
createRoute('🌟Vixen', true)

// @ts-expect-error
createRoute('💃Dancer', [1])

// @ts-expect-error
createRoute('☄️Comet', { 1: 1 })
```

> Prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [Michigan TypeScript](https://michigantypescript.com/).

> Code by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [SquiggleConf](https://squiggleconf.com/).
