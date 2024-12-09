# Challenge 05

> _[❤️ Cupid and 🌟 Vixen are presenting 🎅 Santa with their work on the route for this year's Christmas present delivery.]_\
> \
> _[🎅 Santa]_ What is it? Are you guys working blindfolded or what!??\
> \
> _[❤️ Cupid]_ Hardly. We've been working on this for weeks and weeks.\
> \
> _[🎅 Santa]_ What am I even shelling out these beautiful carrots for? It's like it's suddenly amateur hour at the North Pole!\
> \
> _[🌟 Vixen]_ Actually, funny you should raise that point because you pay us for a quality of work far below what we've just provided. You should be thrilled.\
> \
> _[🎅 Santa]_ I don't want any more of that attitude from you, 🌟 Vixen. I think you should think of the position that puts your colleagues in when you talk like that. Should I pay them less just so I can pay you more? Huh?\
> \
> _[🌟 Vixen]_ I'm getting tired of going around-and-around with you on this. Just tell us what you want.\
> \
> _[🎅 Santa]_ Well for one thing, the route should be should be able to handle any arbitrary input! And while you’re at it, make the route solar-powered. The PR team says it’s time we went carbon neutral.

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
