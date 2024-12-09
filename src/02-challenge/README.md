# Challenge 02

> _[🎅 Santa's reindeer,⚡ Blitzen, has a secret meeting with 🎩Bernard, the head of the elves after ☄️ Comet and 💨 Dasher presented 🎅 Santa with their a pay increase demand.]_ \
> \
> _[⚡ Blitzen]_ Did Santa go for it? Did he accept our `Demand` for a pay increase? \
> \
> _[🎩 Bernard]_ Those moron's ☄️ Comet and 💨 Dasher just wrote down `number`. I told them to write down a number. \
> \
> _[⚡ Blitzen]_ _What in the actual F..._ \
> \
> _[🎩 Bernard]_ I know I know. You have to really spell it out for them. \
> \
> _[⚡ Blitzen]_ Alright. I'll take care of it. I'll budget 100k for each of us Reindeer. That’s enough to cover therapy for pulling Santa’s bloated cheeks across three continents, plus a little left over for a sleigh-side mojito bar. \
> \
> _[🎩 Bernard]_ I swear if I have to hold their hand anymore we're gonna put Reindeer sausage on the menu like the humans in Alaska seem to enjoy so much. \
> \
> _[⚡ Blitzen, agast]_ You realize I'm a reindeer? You gotta lay off the powered sugar bro. \
> \
> _[🎩 Bernard]_ Over my dead body. It's the only thing that makes me feel good in this nightmare of a job.

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
