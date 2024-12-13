# Challenge 11

> _[Last night, while the reindeer plotted on how to leverage 💋 Crystal Claus with their knowledge of her affair with Jamie Glitterglum, 💋 Crystal and Jamie met up in a panic. Today, 🎅 Santa is beginning to suspect something]_\
> \
> _[🎅 Santa]_ Dear.. Where were you last night?\
> \
> _[💋 Crystal, turning bright red in embarrassment]_ Oh. Uh, I was out doing karaoke with some friends. Kendrick Lamar and Opeth both released albums on the same day last month, so we've been learning all the songs to both. _[coughing nervously]_ Oh _[cough]_ and also we were trying out a new drink one of the elves came up with. It's a bit like a mojito but instead of mint it's.. well it's a whole thing. Then we also\
> \
> _[🎅 Santa]_ You seem nervous.\
> \
> _[💋 Crystal, sweating]_ Oh, no, not at all! Not at all! It's just so hard to remember, you can understand!\
> \
> _[Later that night 💋 Crystal and Jamie met again.]_\
> \
> _[💋 Crystal]_ We're in BIG trouble. What are we gonna do!!? We need a new excuse, and we need to add something to it. But... what??\
> \
> _[Jamie]_ Talk to him again, but this time be ready to add to your excuse! Just bury him in details. 🎅 Santa tunes out if you say anything longer than two sentences about non-cookie-related topics. Think of a few different excuses, just in case.

We already have a `Excuse` that 💋 Crystal provided 🎅 Santa, but now we need to extend it in some way. We need it to be general-purpose, so 💋 Crystal can try a few different ideas out.

<details>
<summary>Hint</summary>
How do you create a "newable" object in JavaScript (i.e. one that you use the <code>new</code> keyword with)? How do you provide TypeScript types to such a thing?
</details>

## Expected Behavior

```ts
const existingExcuses = {
	karaoke: ['Kendrick Lamar, Opeth'],
	margarita: 'Peppermint-Jalapeño Mojito',
}

const helpingTheReindeer = {
	helping: 'the reindeer',
} as const

declare const Excuse01: Excuse<typeof helpingTheReindeer>

const excuse01 = new Excuse01({
	...existingExcuses,
	...helpingTheReindeer,
})

type Actual01 = typeof excuse01 // => 'helping: the reindeer'

const eatingFudge = {
	eating: 'fudge',
} as const

declare const Excuse02: Excuse<typeof eatingFudge>

const excuse02 = new Excuse02({
	...existingExcuses,
	...eatingFudge,
})

type Actual02 = typeof excuse02 // => 'eating: fudge'
```

> Prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [Michigan TypeScript](https://michigantypescript.com/).

> Code by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [SquiggleConf](https://squiggleconf.com/).
