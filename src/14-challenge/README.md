# Challenge 14

> [🎅 Santa] Sadly, she's no longer a 10.\
> \
> [🎩 Bernard] Are we talking about the same thing??\
> \
> [🎅 Santa] Huh? Oh. Right, you were talking about the reindeer.\
> \
> [🎩 Bernard] Yeah, what were you talking about?\
> \
> [🎅 Santa] Nothing, nothing. So just tell them they'll get their raise when they can show some dedication to this business.\
> \
> [🎩 Bernard] The thing is they feel like they've more than accomplished that over the last 15 years since they last got a pay increase.\
> \
> [🎅 Santa] Tell them we'll review it during the next performance review.\
> \
> [🎩 Bernard, facepalming] And when is that?\
> \
> [🎅 Santa] When their performance improves! You think I just give raises to anyone who pulls a sleigh? This isn’t charity.

We need a type for a function that represents the performance review cycle. With this function in hand, perhaps 🎩 Bernard will be able to convince 🎅 Santa to take the reindeer's demands more seriously.

<details>
<summary>Hint</summary>
Learn some more about how to create and type async functions that are also iterable (generators).
</details>

## Expected Behavior

```ts
async function* numberAsyncGenerator() {
	yield 1
	yield 2
	yield 3
}

type Actual01 = PerfReview<ReturnType<typeof numberAsyncGenerator>> // 1 | 2 | 3

async function* stringAsyncGenerator() {
	yield '1%'
	yield '2%'
}

type Actual02 = PerfReview<ReturnType<typeof stringAsyncGenerator>> // '1%' | '2%'
```

> Prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [Michigan TypeScript](https://michigantypescript.com/).

> Code by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [SquiggleConf](https://squiggleconf.com/).
