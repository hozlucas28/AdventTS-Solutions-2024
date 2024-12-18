# Challenge 18

> _[After decades of not raising the reindeer's pay, 🎅 Santa suddenly and unexpectedly decided to raise their pay quite substantially. The reindeer are in shock.]_\
> \
> _[☄️ Comet]_ It cannot be overstated enough how unlikely this was. How did he suddenly change.\
> \
> _[💃 Dancer]_ We all know what happened. It was 💋 Crystal. She convinced him.\
> \
> _[🌟 Vixen]_ This is gonna make such a huge difference for my finances. I can finally pay off the debt I accrued from Battlefront II loot boxes.\
> \
> _[❤️ Cupid]_ You idiots. This is a win, but it's hardly putting us ahead. Have you forgotten about the 15 consecutive years of us being paid unfairly? All those lost wages will never come back to us. It's gone. We're only being paid a fair average wage now. We're not even paid well. 50% of reindeer make more than we do, and we're supposed to be happy about that!? We're the premiere reindeer the whole world looks up to yet we're paid like a substitute teacher elf.\
> \
> _[💃 Dancer]_ Well, irregardless, we've got an easy day in front of us. All we need to do is fix a small problem with the street lights in town. After that... might be time to throw ourselves a little party!\
> \
> _[❤️ Cupid]_ Is a party really appropriate given the circumstances? 💨 Dasher, didn't your wife's hospitalization 5 years ago bankrupt you - have you recovered from that?\
> \
> _[💨 Dasher]_ Yeah, that is true, but look at the bright side! We're paid more now!\
> \
> _[❤️ Cupid]_ Do I have to get out my inflation calculator again for you nincompoops??\
> \
> _[💃 Dancer]_ Alright alright ❤️ Cupid, we all heard you. Let's just fix the street lights, can we?\
> \
> _[❤️ Cupid]_ One day 🎅 Santa is gonna come to his senses and realize what happened here. When that day comes, we're in for an exceedingly bad time. Mark. My. Words.

<details>
<summary>Hint</summary>
If you're tempted to do something like this:

```ts
const createStreetLight = <C extends string, D extends C>(colors: C[], defaultColor: D) => {
	// ...
}
```

That won't work here. We're trying to signal to TypeScript not to dig in and match against the inner types to find candidates for type inference.

</details>

## Expected Behavior

```ts
const colors = ['red' as const, 'yellow' as const, 'green' as const]

// Red is a valid color, so no generic parameters needed
const Test01 = createStreetLight(colors, 'red') // => 'red' | 'yellow' | 'green'

// One generic parameter is ok
const Test02 = createStreetLight<Color>(colors, 'red') // => 'red' | 'yellow' | 'green'

// @ts-expect-error (no generic parameters) blue is not a valid option
const Test03 = createStreetLight(colors, 'blue')

// @ts-expect-error does not accept two generic parameters, even providing a valid option
const Test04 = createStreetLight<Color, 'red'>(colors, 'red')

// @ts-expect-error does not accept two generic parameters, and blue isn't a valid option
const Test05 = createStreetLight<Color, 'blue'>(colors, 'blue')

// @ts-expect-error (with one generic parameter) blue is not a valid option
const Test06 = createStreetLight<Color>(colors, 'blue')
```

> Prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [Michigan TypeScript](https://michigantypescript.com/).

> Code by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [SquiggleConf](https://squiggleconf.com/).
