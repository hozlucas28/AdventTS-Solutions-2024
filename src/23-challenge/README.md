# Challenge 23

The North Pole's toy assembly line is getting a major upgrade! To streamline production, the elves need to build a type-safe conveyor belt system that can standardize their operations and make them reusable. The system should introduce an `Apply` type that can be used to apply operations to values.

The system should support the following operations:

- `Push`: Add an item to a tuple
- `Extends`: Check if a type extends another type
- `Filter`: Filter items in a tuple based on any criteria
- `ApplyAll`: Apply an operation to all items in a tuple
- `Cap`: Capitalize the first letter of a string

Example usage of the conveyor belt system:

```ts
type Station01 = Apply<Cap, 'robot'> // => "Robot"
type Station02 = Apply<Apply<Push, Station01>, ['Tablet', 'teddy bear']> // => ["Tablet", "teddy bear", "Robot"]
type Station03 = Apply<Apply<Filter, Apply<Extends, Apply<Cap, string>>>, Station02> // => ["Tablet", "Robot"]
```

<details>
<summary>Hint</summary>
Generic types like <code>Array</code> let you abstract over the type of the element (<code>T</code>) in the container (<code>Array</code>). But what if you need to abstract over the type of the container itself?
</details>

## Expected Behavior

```ts
type Test01 = Apply<Cap, 'hello'> // => 'Hello'

type Test02 = Apply<Apply<Push, 'world'>, ['hello']> // => ['hello', 'world']

type Test03 = Apply<Apply<ApplyAll, Cap>, Apply<Apply<Push, 'world'>, ['hello']>> // => ['Hello', 'World']

type Test04 = Apply<Apply<Filter, Apply<Extends, number>>, [1, 'foo', 2, 3, 'bar', true]> // => [1, 2, 3]

type Station01 = Apply<Cap, 'robot'> // => // "Robot"
type Station02 = Apply<Apply<Push, Station01>, ['Tablet', 'teddy bear']> // => ["Tablet", "teddy bear", "Robot"]

type Test05 = Apply<Apply<Filter, Apply<Extends, Apply<Cap, string>>>, Station02> // => ['Tablet', 'Robot']
```

> Prompt by [Travis Wagner](https://github.com/trvswgnr).

> Code by [Dimitri Mitropoulos](https://github.com/dimitropoulos) on behalf of [SquiggleConf](https://squiggleconf.com/).
