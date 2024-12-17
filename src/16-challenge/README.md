# Challenge 16

> _[The reindeer have made it clear: they will expose 💋 Crystal Claus for her affair with Jamie Glittergum to 🎅 Santa if 💋 Crystal can't convince 🎅 Santa how to give the reindeer a raise.]_\
> \
> _[🎅 Santa]_ Across the whole internet, all I see is adult children! WHAT'S IT GOING TO TAKE TO GET PIPELINE OPERATORS INTO THIS FORSAKEN LANGUAGE!?!\
> \
> _[💋 Crystal]_ Dear, stop reading the Node.JS release notes. The TC-39 is gonna keep pipeline operators at stage 2 for the next 100 years at this point. Come. Have some some dinner. I've made curry.\
> \
> _[The two eat dinner together, but 🎅 Santa starts to feel a little strange...]_\
> \
> _[💋 Crystal]_ Are you feeling alright, Dear?\
> \
> _[🎅 Santa]_ No, in fact... I'm not. I'm feeling a bit fuzzy.\
> \
> _[💋 Crystal]_ That's great to hear.\
> \
> _[🎅 Santa, eyelids getting heavy]_ What?\
> \
> _[💋 Crystal]_ I had a friend of mine, Jamie Glitterglum, brew a magic memory implanting glitter potion. This will all be over soon, Dear.\
> \
> _[🎅 Santa, fading]_ How could you... do... that...\
> \
> _[💋 Crystal]_ You'll fall asleep, and then I'm going to have a little talk with your subconscious mind. Christopher Nolan can't hold a candle to what Jamie can do.

Well that took a dark turn. You're an accessory to the crime, now. Congrats. Now you have no choice but to help 💋 Crystal with the coverup.

The `originalCurry` had to have some special ingredients added to it, but 💋 Crystal couldn't be sure if 🎅 Santa would see her cooking. So, to avoid raising suspicion, she had to find a way to be able to add the ingredients at different times.

<details>
<summary>Hint</summary>
This is a process called "currying". Also known as "partial application". To accomplish this challenge, it's first good to get familiar with how to separate function arguments in TypeScript. Check out the <code>Parameters</code> builtin utility type to see how you might get started.
</details>

## Expected Behavior

```ts
const originalCurry = (
	ingredient1: number,
	ingredient2: string,
	ingredient3: boolean,
	ingredient4: Date
) => true

const spikedCurry = DynamicParamsCurrying(originalCurry)

// Direct call
spikedCurry(0, 'Ziltoid', true, new Date())

// Partially applied
spikedCurry(1)('The', false, new Date())

// Another partial
spikedCurry(0, 'Omniscient', true)(new Date())

// You can keep calling until the cows come home: it'll wait for the last argument
spikedCurry()()()()(0, 'Captain', true)()()()(new Date())

// currying is ok
spikedCurry(0, 'Spectacular', true)

// @ts-expect-error arguments provided in the wrong order
spikedCurry('Nebulo9', 0, true)(new Date())
```

> Prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [Michigan TypeScript](https://michigantypescript.com/).

> Code by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [SquiggleConf](https://squiggleconf.com/).
