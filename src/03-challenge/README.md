# Challenge 03

> _[🎅 Santa and 🎩 Bernard (the head elf) arguing about the fairness of the reindeer demanding a raise]_\
> \
> _[🎅 Santa]_ ABSO-FRICKIN-LOUTLEY NOT!!\
> \
> _[🎩 Bernard]_ Look. They literally are starving out there. You haven't raised the minimum wage at the North Pole since 2009 and they're beginning to realize that if you take inflation into account they're making half of what they did then. Then if you consider how much housing has gone up over the same time it all adds up to a..\
> \
> _[🎅 Santa]_ I don't want to hear another word of this! NOT ONE MORE WORD! If I could, I'd send some of them to prison for their piss poor job performance!!\
> \
> _[🎩 Bernard]_ It's not gonna be simple to keep this going.\
> \
> _[🎅 Santa]_ I don’t have time to crunch numbers, Bernard! I’m trying to figure out if eggnog futures are still a thing.\
> \
> _[🎩 Bernard]_ Alright, you know what. Because we go way back, you and me, I'll do you a favor and make you a program that will calculate their cost of living for a given year since 2009.\
> \
> _[🎅 Santa]_ GOOD! Because this operation is hanging by a thread! The elves are threatening to unionize, the reindeer are planning a hunger strike, and Mrs. Claus wants a Peloton.\
> \
> The function 🎩 Bernard created works for numbers, but it also accepts other data types like strings, booleans, arrays, and objects. That's not quite what we want! TypeScript can help us here.

<details>
<summary>Hint</summary>
How can we change the signature to <code>survivalRatio</code> to make TypeScript give us type errors on the invocations that pass things other than numbers?
</details>

## Expected Behavior

```ts
export const reportForSanta = {
	2009: survivalRatio(2009),
	2010: survivalRatio(2010),
	2011: survivalRatio(2011),
	2012: survivalRatio(2012),
	2013: survivalRatio(2013),
	2014: survivalRatio(2014),
	2015: survivalRatio(2015),
	2016: survivalRatio(2016),
	2017: survivalRatio(2017),
	2018: survivalRatio(2018),
	2019: survivalRatio(2019),
	2020: survivalRatio(2020),
	2021: survivalRatio(2021),
	2022: survivalRatio(2022),
	2023: survivalRatio(2023),
}

// @ts-expect-error
survivalRatio('1')

// @ts-expect-error
survivalRatio(true)

// @ts-expect-error
survivalRatio([1])

// @ts-expect-error
survivalRatio({ 1: 1 })
```

> Prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [Michigan TypeScript](https://michigantypescript.com/).

> Code by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [SquiggleConf](https://squiggleconf.com/).
