# Challenge 21

After discovering the unused variables in the elves' code, 🎩 Bernard has one more request...

> _[🎩 Bernard]_ These scripts are getting better, but we need to track ALL the variables - both the ones being used AND the ones collecting dust. We had a close call where a toy almost got left out of its gift box because the variable was declared but never used - if we have to check all this by hand it's going to take forever and kids might not get their presents!

The elves need to improve their code analyzer one final time to create a complete linting tool that will:

1. Track all variable declarations and usage
2. Identify unused variables
3. Return everything in a single, organized report

For example, when analyzing this script:

```ts
let robotDog = 'standard_model'
const giftBox = 'premium_wrap'
var ribbon123 = 'silk'

wrapGift(giftBox)
addRibbon(ribbon123)
```

The linter should produce:

```ts
{
  scope: {
    declared: ["robotDog", "giftBox", "ribbon123"],
    used: ["giftBox", "ribbon123"]
  },
  unused: ["robotDog"]  // robotDog was never put in the box!
}
```

Implement a type `Lint` that performs this analysis, handling:

- All previous functionality (variable declarations and usage tracking)
- Identification of unused variables in a separate `unused` array
- Various amounts of whitespace, tabs, and empty lines
- Empty scripts (which should return empty arrays for all fields)

<details>
<summary>Hint</summary>
Build upon your previous analyzers! The unused variables are those that appear in <code>declared</code> but not in <code>used</code>. Think about how you can compare these two arrays at the type level.
</details>

## Expected Behavior

```ts
type Test01 = Lint<`
let teddyBear = "standard_model";
`>
/**
 * => {
 *      scope: { declared: ['teddyBear']; used: [] };
 *      unused: ['teddyBear'];
 *    }
 */

type Test02 = Lint<`
buildToy(teddyBear);
`>
/**
 * => {
 *      scope: {
 *          declared: [];
 *          used: ['teddyBear'];
 *      };
 *      unused: [];
 *    }
 */

type Test03 = Lint<`
let robotDog = "deluxe_model";
assembleToy(robotDog);
`>
/**
 * => {
 *      scope: {
 *          declared: ['robotDog'];
 *          used: ['robotDog'];
 *      };
 *      unused: [];
 *    }
 */

type Test04 = Lint<`
let robotDog = "standard_model";
  const giftBox = "premium_wrap";
    var ribbon123 = "silk";

  \t
  wrapGift(giftBox);
  \r\n
      addRibbon(ribbon123);
`>
/**
 * => {
 *      scope: {
 *          declared: ['robotDog', 'giftBox', 'ribbon123'];
 *          used: ['giftBox', 'ribbon123'];
 *      };
 *      unused: ['robotDog'];
 *    }
 */

type Test05 = Lint<'\n\t\r \t\r '>
/**
 * => {
 *      scope: {
 *          declared: [];
 *          used: [];
 *      };
 *      unused: [];
 *    }
 */
```

> Prompt by [Travis Wagner](https://github.com/trvswgnr).

> Code by [Josh Goldberg](https://joshuakgoldberg.com/) in honor of [typescript-eslint](https://typescript-eslint.io/).
