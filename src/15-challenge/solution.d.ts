// Helpers
type Group<
	T extends string,
	Location extends string = '',
	Locations extends string[] = [],
	Distance extends 1[] = [],
	Distances extends number[] = [],
> = T extends `${infer Head}${infer Body}`
	? Head extends '-'
		? Location extends ''
			? Locations['length'] extends 0
				? Group<Body, '', [], [], []>
				: Group<Body, '', Locations, [...Distance, 1], Distances>
			: Group<Body, '', [...Locations, Location], [...Distance, 1], Distances>
		: Distance['length'] extends 0
			? Locations['length'] extends 0
				? Group<Body, `${Location}${Head}`, [], [], [0]>
				: Group<Body, `${Location}${Head}`, Locations, [], Distances>
			: Group<Body, `${Location}${Head}`, Locations, [], [...Distances, Distance['length']]>
	: Location extends ''
		? [Locations, Distances]
		: [[...Locations, Location], Distances]

// Solution
export type GetRoute<
	T extends string,
	Locations extends string[] = Group<T>[0],
	Distances extends number[] = Group<T>[1],
	Acc extends [string, number][] = [],
> = Locations extends [infer Location extends string, ...infer RestLocations extends string[]]
	? Distances extends [infer Distance extends number, ...infer RestDistances extends number[]]
		? GetRoute<T, RestLocations, RestDistances, [...Acc, [Location, Distance]]>
		: []
	: Acc
