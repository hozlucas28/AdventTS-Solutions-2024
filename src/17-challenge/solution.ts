// Helpers
type FirstChar<T extends string> = T extends `${infer Head}${infer _Rest}` ? Head : T
type FirstItem<T extends string[]> = T extends [infer Head, ...infer _Rest] ? Head : T

// Solution
export const compose =
	<T, A, B, C>(f: (x: T) => A, g: (x: A) => B, h: (x: B) => C) =>
	(a: T): C =>
		h(g(f(a))) as C

export const upperCase = <T extends string>(x: T): Uppercase<T> => x.toUpperCase() as Uppercase<T>
export const lowerCase = <T extends string>(x: T): Lowercase<T> => x.toLowerCase() as Lowercase<T>
export const firstChar = <T extends string>(x: T): FirstChar<T> => x[0] as FirstChar<T>
export const firstItem = <T extends string[]>(x: T) => x[0] as FirstItem<T>
export const makeTuple = <T extends string>(x: T) => [x] as [T]
export const makeBox = <T extends string | string[]>(value: T) => ({ value }) as const
