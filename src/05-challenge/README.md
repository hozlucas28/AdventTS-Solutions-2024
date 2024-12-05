# Challenge 05

🎅 Santa is hard to please. That much is for sure. To appease him, we want a function that will accept any input and return a value that has exactly the same type.

<details>
<summary>Hint</summary>
You need to find some way to pass this function a <i>parameter</i> which is, itself, a type. There's a generic and general purpose syntax for doing this. Are you familiar with it?
</details>

## Expected Behavior

```ts
const oneMill = createRoute('💨Dasher', 100_000_000)

type Actual01 = typeof oneMill // => 100000000
type Expected01 = 100_000_000 // => 100000000

const two = createRoute('💃Dancer', 2)

type Actual02 = typeof two // => 2
type Expected02 = 2 // => 2

const three = createRoute('🦌Prancer', 2)

type Actual03 = typeof three // => 2
type Expected03 = 2 // => 2

const four = createRoute('🌟Vixen', '1')

type Actual04 = typeof four // => '1'
type Expected04 = '1' // => '1'

const five = createRoute('☄️Comet', true)

type Actual05 = typeof five // => true
type Expected05 = true // => true

const six = createRoute('❤️Cupid', [1])

type Actual06 = typeof six // => number[]
type Expected06 = number[] // => number[]

const seven = createRoute('🌩️Donner', { 1: 1 })

type Actual07 = typeof seven // => {1: number}
type Expected07 = { 1: number } // => {1: number}

const eight = createRoute('⚡Blitzen', Symbol('🔴 === evil'))

type Actual08 = typeof eight // => symbol
type Expected08 = symbol // => symbol
```

> Prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [Michigan TypeScript](https://michigantypescript.com/).

> Code by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [SquiggleConf](https://squiggleconf.com/).
