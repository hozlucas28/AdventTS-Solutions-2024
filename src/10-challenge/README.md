# Challenge 10

> _[🌟 Vixen tells the other reindeer of his plan to use Mrs. Claus' affair with Jamie as leverage to get the reindeer fair pay.]_\
> \
> _[🦌 Prancer]_ Holy crapy, 🌟 Vixen, this is going to change everything for us!\
> \
> _[☄️ Comet]_ It ain't gonna change a damn thing if we don't get these priority flags sorted out!\
> \
> _[🔴 Rudolph]_ Why is it that every time we have work to do you all come up with some crazy plan like this instead of doing work??\
> \
> _[🌟 Vixen]_ This one is huge, though! This is the motherload!!\
> \
> _[🔴 Rudolph]_ We're gonna be in a motherload of pain if we can't finish writing this enum!\
> \
> _[🌟 Vixen]_ Ok ok ok ok. Let's just get it done. What's the rules we got from the elves? Something about bitwise operators? I swear, > those little jerks just invent rules to mess with us.

Most TypeScript users and experts agree that you should avoid using TypeScript Enums. But there is one very specific thing they're really valuable for: flags!

The staff at the North Pole use bitwise enum flags to organize the different gift categories. Here are the rules to the logic:

- `Coal`, `Train`, `Bicycle`, `SuccessorToTheNintendoSwitch`, `TikTokPremium` Vape are all unique gifts.
- `Traditional` can be either `Train` or `Bycicle`.
- `OnTheMove` can be any of `Coal`, `Bicycle`, `TikTokPremium`, or `Vape`.
- `OnTheCouch` is like `OnTheMove` except instead of `Bicycle` it's got `SuccessorToTheNintendoSwitch`.

> [!NOTE]
> DO NOT simply copy the literal values for each flag from the tests. Instead, think about the rules and create a system of bitwise enum flags that will satisfy the tests.

<details>
<summary>Hint</summary>
The tests can be rewritten like this:

```ts
test<Gift.Coal>(0b00000)
test<Gift.Train>(0b00001)
test<Gift.Bicycle>(0b00010)
test<Gift.SuccessorToTheNintendoSwitch>(0b00100)
test<Gift.TikTokPremium>(0b01000)
test<Gift.Vape>(0b10000)
test<Gift.Traditional>(0b00001 | 0b00010)
test<Gift.OnTheMove>(0b00000 | 0b00010 | 0b01000 | 0b10000)
test<Gift.OnTheCouch>((0b11010 & ~0b00010) | 0b00100)
```

Try completing the challenge without binary notation, though, using the `<<` operator.

</details>

## Expected Behavior

```ts
Gift.Coal // => 0
Gift.Train // => 1
Gift.Bicycle // => 2
Gift.SuccessorToTheNintendoSwitch // => 4
Gift.TikTokPremium // => 8
Gift.Vape // => 16
Gift.Traditional // => 3
Gift.OnTheMove // => 26
Gift.OnTheCouch // => 28

// @ts-expect-error
Gift.Coal // => 10

// @ts-expect-error
Gift.Train // => 11

// @ts-expect-error
Gift.Bicycle // => 12

// @ts-expect-error
Gift.SuccessorToTheNintendoSwitch // => 14

// @ts-expect-error
Gift.TikTokPremium // => 18

// @ts-expect-error
Gift.Vape // => 116

// @ts-expect-error
Gift.Traditional // => 13

// @ts-expect-error
Gift.OnTheMove // => 126

// @ts-expect-error
Gift.OnTheCouch // => 124
```

> Prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [Michigan TypeScript](https://michigantypescript.com/).

> Code by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [SquiggleConf](https://squiggleconf.com/).
