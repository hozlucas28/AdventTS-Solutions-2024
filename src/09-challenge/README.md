# Challenge 09

Jamie sure is in trouble. Help Jamie do 🌟 Vixen's job by making types for the `santas-special-list` package. Things are really heating up in the North Pole!

<details>
<summary>Hint</summary>
What do you do, in TypeScript, if you have a situation where there's an <code>npm</code> you'd like to use but it doesn't have types? You need some way to declare types for that node module.
</details>

## Expected Behavior

```ts
import type { Status, Child, List } from 'santas-special-list'

type Actual01 = Status // => 'naughty' | 'nice'

type Actual02 = Child // => { name: string, status: Status }

type Actual03 = List // => Child[]
```

> Prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [Michigan TypeScript](https://michigantypescript.com/).

> Code by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [SquiggleConf](https://squiggleconf.com/).
