# Challenge 07

> _[💋 Crystal Claus, 🎅 Santa's wife, has been unhappy in her marriage. 🎅 Santa goes on days-long benders where he's almost impossible to tolerate. 💋 Crystal has needs too, after all. Jamie Glitterglum, 💋 Crystal's long time friend, has recently made some... advances, and 💋 Crystal isn't sure what to do. 💋 Crystal confides in 🎩 Bernard.]_\
> \
> _[💋 Crystal]_ He's gonna kill me, 🎩Bernard. Or worse, he’ll leave me stranded at the North Pole with no Wi-Fi and zero prospects.\
> \
> _[🎩 Bernard]_ Did anything actually happen though?\
> \
> _[💋 Crystal]_ Well not exactly.........\
> \
> _[🎩 Bernard, looking skeptical]_ ??\
> \
> _[💋 Crystal]_ It’s complicated!! Things just kinda... escalated over mulled wine and snowman-shaped Jello shots!\
> \
> _[🎩 Bernard]_ How exactly does one sorta have an affair behind the back of the Patron of Yuletide, himself? Did you trip and fall into Jamie's lap or something?\
> \
> _[💋 Crystal]_ Jamie and I haven't quite exactly... well... it's complicated!!\
> \
> _[🎩 Bernard]_ You better make it less complicated! and soon! Although, thankfully it's 🎅 Santa we're talkin' about. The guy thinks JSON is a new kind of cookie.\
> \
> _[💋 Crystal]_ I know exactly what to do. 🎅 Santa's been super frustrated with the work of those damn reindeer. They've been developing this subroutine to create new routes on Christmas night, but it's not working correctly. The literal values won't infer like they're supposed to. It's close but.... I think if I can fix it, I can keep 🎅 Santa from going on another rage-filled tirade. I gotta keep him content.\
> \
> _[🎩 Bernard]_ Then this would mark the first time I’ve seen him not rage-punch a snow globe over the slightest inconvenience.

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
