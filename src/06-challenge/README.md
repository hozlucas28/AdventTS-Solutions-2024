# Challenge 06

> _[Conversation in the `#bugs` company Slack channel.]_\
> \
> _[🎅 Santa]_ How do you hoofed halfwits manage to screw up something a toddler with a crayon could figure out? I asked for the simplest thing I could imagine and you still couldn't do it! If you had two brain cells to rub together you'd understand that only numbers or strings are valid route identifiers!\
> \
> _[🌩️ Donner]_ Please make a thead in this Slack channel, otherwise it gets too noisy and hard to follow. Also our Linear thing just made 3 tickets for each of your messages.\
> \
> _[🎅 Santa]_ I am old school, I prefer IRC-style chatter. I do not value these "thread" things and find them difficult to use. I'll never do it, myself.\
> \
> _[🌟 Vixen, in a thread]_ This isn’t 1997, Santa. Nobody cares about your IRC war stories. This is a company support channel with integrations designed to run the company better. How are you seriously against that??\
> \
> _[🎅 Santa]_ I'm not against that, I'm just against using threads in chat apps.

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
