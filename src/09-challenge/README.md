# Challenge 09

> _[Jamie]_ You're lying. You didn't see anything because nothing was happening. I haven't done anything wrong!\
> \
> _[🌟 Vixen]_ I literally saw you and 💋 Crystal with my own two eyes. Would you like me to describe the unicorn tattoo on your left cheek? Nice one, by the way.\
> \
> [🪩Jamie, sweating] Damn it. You did see. What are you going to do?\
> \
> _[🌟 Vixen]_ 🪩Jamie Glitterglum. It's not what _I am going to do to you_ but rather what _you are going to do **for me**_.\
> \
> _[Jamie]_ Huh?\
> \
> _[🌟 Vixen]_ We've been arguing with Santa about our pay. You seem like someone uniquely positioned to help get him to change his mind.\
> \
> _[Jamie]_ You absolute jerk! You're blackmailing me!\
> \
> _[🌟 Vixen]_ Look, we all have our own goals. Get 💋 Crystal to convince him to pay us what we're worth. We literally haven't had a pay raise since 2009. This shouldn't be so hard, but you know 🎅 Santa. He could care less about the rest of us.\
> \
> _[Jamie]_ Well how am I supposed to do that?\
> \
> _[🌟 Vixen]_ There's an `npm` I've been working on, `santas-special-list`. Honestly it’s a mess of untyped spaghetti code and patched dependencies, so good luck with that. Let's start there. It needs types. I was supposed to do it, but I need some cover so I can discuss all this with the other reindeer. You make the types for me so I can slip away for a few hours. I'll find you tomorrow and let you know what you need to do next.\
> \
> _[Jamie]_ I hate you. I have always hated you. Now I hate you more.\
> \
> _[🌟 Vixen]_ After what you're about to do for me, I think we're going to be great friends. 🖤

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
