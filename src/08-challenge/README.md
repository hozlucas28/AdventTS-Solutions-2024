# Challenge 08

> _[🎅 Santa's noticed that 💋 Crystal Claus (his wife) is a little "on-edge" lately. He doesn't know why, but he wants to give her some much needed attention. 🎅 Santa doesn't know about 💋 Crystal's affair with Jamie Glitterglum]_\
> \
> _[🎅 Santa, drawing 💋 Crystal in for a kiss]_ 💋 Crystal, my sweet, I thought we'd draw a bath and take the night to ourselves.\
> \
> _[💋 Crystal]_ Oh, I had plans dear.\
> \
> _[🎅 Santa]_ Surely you can reschedule?\
> \
> _[💋 Crystal]_ Um. I guess I could.\
> \
> _[🎅 Santa]_ Is that a new perfume you're wearing? Where have I smelled that before? It's heavenly.\
> \
> _[💋 Crystal, quickly and nervously]_ You know what! No problem! Let's get to it!\
> \
> _[🎅 Santa]_ Marvelous, now I just need to freshen up the environment. I think I'll turn on the mood lights, prepare some chocolate strawberries, and set the bath to 327.59 degrees. Not too cold, not too hot. And compliant with ISO 3103 standards for liquid enjoyment.

Only 🎅 Santa, only you could turn romance into a NASA launch checklist. Still, let's help 🎅 Santa set the environment up for a night with Mrs. Claus.

<small>Yes, they use <a href="https://en.wikipedia.org/wiki/Kelvin" target="_blank">Kelvin</a>, none of that Fahrenheit nonsense. It's the North Pole, not Florida. Long story on that we'll save for Advent of TypeScript 2025.</small>

<details>
<summary>Hint</summary>
Node.JS defines globals for things like <code>process.env</code>. How, in TypeScript, can you extend those globals to include your custom environment variables?
</details>

## Expected Behavior

```ts
const { MOOD_LIGHTS } = process.env

type Actual01 = typeof MOOD_LIGHTS // => 'true'

const { BATH_TEMPERATURE } = process.env

type Actual02 = typeof BATH_TEMPERATURE // => '327.59'

const { STRAWBERRIES } = process.env

type Actual03 = typeof STRAWBERRIES // => 'chocolate'
```

> Prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [Michigan TypeScript](https://michigantypescript.com/).

> Code by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [SquiggleConf](https://squiggleconf.com/).
