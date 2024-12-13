# Challenge 12

> _[Things are staring to heat up in the North Pole. The reindeer have been blackmailing Mrs. Claus in order to get fair pay, threatening to expose her affair with 🪩Jamie Glitterglum.]_\
> \
> _[🎅 Santa]_ GET ME THOSE NAMES!!!!!!!!!!\
> \
> _[🎩 Bernard]_ I'm working on it, I'm working on it!\
> \
> _[🎅 Santa]_ TODAY! I NEED THEM TODAY!! ACTUALLY I NEED THEM LAST MONTH!!!\
> \
> _[🎅 Santa throws a giant box of delicate glass Christmas tree ornaments against the factory wall, sending shards of glass flying in every direction]_\
> \
> _[🎩 Bernard]_ Ah, there's the classic 🎅 Santa we all know and love. Smashing priceless ornaments while screaming unintelligibly. Truly, the Christmas spirit personified.\
> \
> _[🎅 Santa]_ TODAY! I NEED THEM TODAY!! ACTUALLY I NEED THEM LAST MONTH!!!\
> \
> _[🎩 Bernard]_ You want every name? Fine. I'll even get you the ones with seven middle initials and the kids named after TikTok trends.

🎩 Bernard has a very long list of names from the Social Security Administration, but we need to format the data into objects so 🎅 Santa can ingest it into his existing system.

Help 🎩 Bernard before 🎅 Santa continues his violent tirade. He's not about to spend a bunch of time looking at each child so instead he's just deciding whether a child is naughty or nice based on the number of characters in their name!

<details>
<summary>Hint</summary>
Part of the fun/trick of this challenge is that you can't solve it normally by iterating because you'll get:

- `Type instantiation is excessively deep and possibly infinite.ts(2589)`
- `Type produces a tuple type that is too large to represent.ts(2799)`

For example, many people will probably first try:

```ts
export type Solution<
	Row extends [string, string, string][],
	Accumulator extends { name: string; count: number }[] = [],
> = Row extends [[infer Name extends string, string, infer Count], ...infer Rest extends Row]
	? Solution<
			Rest,
			[
				...Accumulator,
				{
					name: Name
					count: Count extends `${infer CountNum extends number}` ? CountNum : never
				},
			]
		>
	: Accumulator
```

```ts
export type Solution<Row extends [string, string, string][]> = Row extends [
	[infer Name extends string, string, infer Count],
	...infer Rest extends Row,
]
	? [
			{
				name: Name
				count: Count extends `${infer CountNum extends number}` ? CountNum : never
			},
			...Solution<Rest>,
		]
	: []
```

but that won't work at these scales. You need to find another way to iterate the array that doesn't involve recursion.

</details>

## Expected Behavior

```ts
/**
 * Note that since this is exported, you can import it to play around with it a bit
 *
 * data sourced from https://www.ssa.gov/oact/babynames/names.zip
 */
type Names = [
	['Liam', 'M', '20802'],
	['Noah', 'M', '18995'],
	['Oliver', 'M', '14741'],
	/* See the full list of names in "./solution.ts". */
]

type Actual01 = FormatNames<Names>['length'] // => 31682

type Actual02 = FormatNames<Names>[0]
/*
=> {
	name: 'Liam'
	count: 20802
	rating: 'naughty' // Even number of characters in the name get 'naughty'.
}
*/

type Actual03 = FormatNames<Names>[11194]
/*
=> {
	name: 'Yanni'
	count: 19
	rating: 'nice' // Odd number of characters in the name get 'nice'.
}
*/

type Actual04 = FormatNames<Names>[2761]

/*
=> {
	name: 'Petra'
	count: 148
	rating: 'nice'
}
*/

type Actual05 = FormatNames<Names>[31680]
/*
=> {
	name: 'Aala'
	count: 5
	rating: 'naughty'
}
*/

type Actual06 = FormatNames<Names>[31681]
/*
=> {
	name: 'Aagya'
	count: 5
	rating: 'nice'
}
*/
```

> Prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [Michigan TypeScript](https://michigantypescript.com/).

> Code by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [SquiggleConf](https://squiggleconf.com/).
