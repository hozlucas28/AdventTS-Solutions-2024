# Challenge 07

<details>
<summary>Hint</summary>
How can you get TypeScript to automatically infer a more narrow type?
</details>

## Expected Behavior

```ts
const oneMill = createRoute('💨Dasher', ['Atherton', 'Scarsdale', 'Cherry Hills Village']).route

type Actual01 = typeof oneMill // => ['Atherton', 'Scarsdale', 'Cherry Hills Village']
type Expected01 = ['Atherton', 'Scarsdale', 'Cherry Hills Village'] // => ['Atherton', 'Scarsdale', 'Cherry Hills Village']

const two = createRoute('🌟Vixen', ['Detroit', 'Cleveland', 'Dayton']).route

type Actual02 = typeof two // => ['Detroit', 'Cleveland', 'Dayton']
type Expected02 = ['Detroit', 'Cleveland', 'Dayton'] // => ['Detroit', 'Cleveland', 'Dayton']
```

> Prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [Michigan TypeScript](https://michigantypescript.com/).

> Code by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [SquiggleConf](https://squiggleconf.com/).
