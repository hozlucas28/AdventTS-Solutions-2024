# Challenge 08

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
