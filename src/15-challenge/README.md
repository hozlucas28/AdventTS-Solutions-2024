# Challenge 15

While It's well known that with Christmas spirit at all-time lows, 🎅 Santa has had to resort to using jet fuel to help power his sleigh. But in this economy, gas prices are through the roof! To help keep costs down, the elves came up with a plan to track the distance between each stop on 🎅 Santa's route.

The elves don't really understand "miles" or "kilometers". Instead, they just use the dashes they drew on the map to represent a unit of fuel needed to travel between locations. They've written out 🎅 Santa's entire route as a string of locations separated by these markers.

For example:

```plaintext
north_pole--candycane_forest----gumdrop_sea-------hawaii
```

This means:

- 'candycane_forest' is 2 units from 'north_pole'
- 'gumdrop_sea' is 4 units from 'candycane_forest'
- 'hawaii' is 7 units from 'gumdrop_sea'

The elves need help building a type that will take their route string and calculate how much fuel is needed to travel between each destination.

<details>
<summary>Hint</summary>
Think about how you can use TypeScript's type system to count things. Just like how you can count items in a regular array, you can use a tuple's length in the type system to keep track of numbers. The tricky part is figuring out how to count the dashes between each location while maintaining the relationship between locations and their distances.

</details>

## Expected Behavior

```ts
type Actual01 = GetRoute<''> // => []

type Actual02 = GetRoute<'north_pole'> // => [['north_pole', 0]]

type Actual03 = GetRoute<'--a-b'> // => [['a', 0], ['b', 1]]

type Actual04 = GetRoute<'a-b--'> // => [['a', 0], ['b', 1]]

type Actual05 = GetRoute<'north pole-candy.cane'> // => [['north pole', 0], ['candy.cane', 1]]

type Actual06 = GetRoute<'a--------------------------------------------------b'> // => [['a', 0], ['b', 50]]

type Actual07 = GetRoute<'a--a-a---a'> // => [['a', 0], ['a', 2], ['a', 1], ['a', 3]]

type Actual08 = GetRoute<'north_pole--candycane_forest----gumdrop_sea-------hawaii'>
/*
=> [
	['north_pole', 0],
	['candycane_forest', 2],
	['gumdrop_sea', 4],
	['hawaii', 7],
]
*/

type Actual09 = GetRoute<'a-b-c-d'>
/*
=> [
	['a', 0],
	['b', 1],
	['c', 1],
	['d', 1],
]
*/

type Actual10 = GetRoute<'🎅--🎄---🏠----🤶'>
/*
=> [
	['🎅', 0],
	['🎄', 2],
	['🏠', 3],
	['🤶', 4],
]
*/

type Actual11 = GetRoute<'a--b----c-d---e'>
/*
=> [
	['a', 0],
	['b', 2],
	['c', 4],
	['d', 1],
	['e', 3],
]
*/

// @ts-expect-error should only accept string input
type Actual12 = GetRoute<123>
```

> Prompt by [Travis Wagner](https://github.com/trvswgnr).

> Code by [Travis Wagner](https://github.com/trvswgnr).
