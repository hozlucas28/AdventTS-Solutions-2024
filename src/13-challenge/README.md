# Challenge 13

> _[❤️ Cupid]_ WHEN I"M DONE WITH HIM THERE WON"T BE NOTHIN" LEFT!!!\
> \
> _[💨 Dasher]_ Bro, I want the same things you do but you gotta take a chill pill.\
> \
> _[❤️ Cupid]_ I"M READY TO EXPLODE ON HIS CHIMNEY-CLIMBIN" ASS.\
> \
> _[💃 Dancer]_ Look, ❤️ Cupid. Here's the thing. We are close. We have 💋 Crystal Right where we want her. We can use her to get what we want. And, after all, we'll be doing her a favor because she's also getting what she wants - to keep things about her and 🪩Jamie quiet.\
> \
> _[❤️ Cupid]_ OUR TERMS BETTER BE BULLETPROOF BECAUSE THAT COOKIE-STEALING MANIAC IS GONNA FIND A WAY TO WEASLE OUT OF IT.\
> \
> _[💃 Dancer]_ Yes. Absolutely. Let's make sure no term can conflict with any other. Think of it like designing a GraphQL Schema - no room for innovation.

The reindeer are almost ready to make their demands. Help the reindeer make terms for their demands in such a way that no term can be conflated with any other term.

<details>
<summary>Hint</summary>
Are you familiar with the terms covariant, contravariant, bivariant, invariant? If so, might be useful to read up on those!
</details>

## Expected Behavior

```ts
declare let Demand01: Demand<unknown>
declare let Demand02: Demand<string>
declare let Demand03: Demand<'Immediate 4% Pay Increase'>
declare let Demand04: Demand<'3 Days Paid Time Off Per Year'>

type Test01 = Expect<Equal<typeof Demand01, { demand: unknown }>>

Demand01 = Demand01 // ✅

// @ts-expect-error
Demand01 = Demand02

// @ts-expect-error
Demand01 = Demand03

// @ts-expect-error
Demand01 = Demand04

type Test02 = Expect<Equal<typeof Demand02, { demand: string }>>

// @ts-expect-error
Demand02 = Demand01

Demand02 = Demand02 // ✅

// @ts-expect-error
Demand02 = Demand03

// @ts-expect-error
Demand02 = Demand04

type Test03 = Expect<Equal<typeof Demand03, { demand: 'Immediate 4% Pay Increase' }>>

// @ts-expect-error
Demand03 = Demand01

// @ts-expect-error
Demand03 = Demand02

Demand03 = Demand03 // ✅

// @ts-expect-error
Demand03 = Demand04

type Test04 = Expect<Equal<typeof Demand04, { demand: '3 Days Paid Time Off Per Year' }>>

// @ts-expect-error
Demand04 = Demand01

// @ts-expect-error
Demand04 = Demand02

// @ts-expect-error
Demand04 = Demand03

Demand04 = Demand04 // ✅
```

> Prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [Michigan TypeScript](https://michigantypescript.com/).

> Code by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [SquiggleConf](https://squiggleconf.com/).
