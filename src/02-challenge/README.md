# Challenge 02

Yesterday ☄️ Comet and 💨 Dasher just gave `number` as their demand to 🎅 Santa. That's not nearly specific enough. We're gonna need something much more specific.

Look at the tests. See what we can change to make them all pass.

<details>
    <summary>Hint</summary>
    In TypeScript, we can specify types with primitives like <code>number</code> and <code>boolean</code> and <code>string</code> but we can also specify types with <i>type literals</i> like <code>1</code>, <code>true</code>, and <code>"abcd"</code>. In this case, you can see that the tests are showing you that you need to provide a <i>number literal</i> to make the tests pass.
</details>

## Expected Behavior

```ts
type Specific_Demand = Demand // 900000
```

> Prompt by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [Michigan TypeScript](https://michigantypescript.com/).

> Code by [Dimitri Mitropoulos](https://github.com/dimitropoulos) of [SquiggleConf](https://squiggleconf.com/).
