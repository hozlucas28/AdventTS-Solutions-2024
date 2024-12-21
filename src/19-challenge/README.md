# Challenge 19

Some of the lazier elves in the workshop are trying to automate their toy-making duties using code with a familiar syntax. Before 🎅 Santa finds out about their automation scheme, the code needs to be parsed and validated by 🎩 Bernard to make sure no corners are being cut!

Implement a type `Parse` that analyzes these scripts and breaks them down into their basic components. The scripts include:

- Variable declarations (using `let`, `const`, or `var`)
- Function calls (like `wrapGift` or `buildToy`)

For example, when an elf writes:

```ts
let teddyBear = 'standard_model'
buildToy(teddyBear)
```

It needs to be decoded for 🎩 Bernard's review as:

```ts
;[
	{
		id: 'teddyBear',
		type: 'VariableDeclaration',
	},
	{
		argument: 'teddyBear',
		type: 'CallExpression',
	},
]
```

The code validator needs to handle:

- Different ways of declaring variables (`let`, `const`, and `var`)
- Any function call that takes a parameter
- Various amounts of spacing, tabs, and empty lines (elves aren't great at formatting)

<details>
<summary>Hint</summary>
Use recursive type patterns with string template literals to decode the automation scripts step by step. Be careful with whitespace - elves are notoriously inconsistent with their formatting!
</details>

## Expected Behavior

```ts
type Test01 = Parse<`
let teddyBear = "standard_model";
`>
/**
 * => [
 *      {
 * 	        id: 'teddyBear';
 *          type: 'VariableDeclaration';
 *      },
 *    ]
 */

type Test02 = Parse<`
buildToy(teddyBear);
`>
/**
 * => [
 *      {
 *          argument: 'teddyBear';
 *          type: 'CallExpression';
 *      },
 *    ]
 */

type Test03 = Parse<`
let robotDog = "deluxe_model";
assembleToy(robotDog);
`>
/**
 * => [
 *      {
 *          id: 'robotDog';
 *          type: 'VariableDeclaration';
 *      },
 *      {
 *          argument: 'robotDog';
 *          type: 'CallExpression';
 *      },
 *    ]
 */

type Test04 = Parse<`
  const giftBox = "premium_wrap";
    var ribbon123 = "silk";

  \t
  wrapGift(giftBox);
  \r\n
      addRibbon(ribbon123);
`>
/**
 * => [
 *      {
 *          id: 'giftBox';
 *          type: 'VariableDeclaration';
 *      },
 *      {
 *          id: 'ribbon123';
 *          type: 'VariableDeclaration';
 *      },
 *      {
 *          argument: 'giftBox';
 *          type: 'CallExpression';
 *      },
 *      {
 *          argument: 'ribbon123';
 *          type: 'CallExpression';
 *      },
 *    ]
 */

type Test05 = Parse<'\n\t\r \t\r '> // => []
```

> Prompt by [Travis Wagner](https://github.com/trvswgnr).

> Code by [Josh Goldberg](https://joshuakgoldberg.com/) in honor of [typescript-eslint](https://typescript-eslint.io/).
