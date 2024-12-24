// Helpers
declare const argKey: unique symbol
declare const unset: unique symbol

type ArgKey = typeof argKey
type Unset = typeof unset

interface Func {
	[argKey]: unknown
	return: unknown
}

interface PartialApply<Fn extends Func, PartialArgs extends unknown[]> extends Func {
	return: this[ArgKey] extends infer CurriedArgs extends unknown[]
		? [...PartialArgs, ...CurriedArgs] extends infer Args extends unknown[]
			? Apply<Fn, Args[0], Args[1]>
			: never
		: never
}

// Solution

// Apply
export type Apply<Fn extends Func, Arg01 = Unset, Arg02 = Unset> = (Fn & {
	[argKey]: [Arg01, Arg02]
})['return']

// ApplyAll
export interface ApplyAll extends Func {
	return: this[ArgKey] extends [infer Fn extends Func, infer Args extends unknown[], ...any]
		? Args extends [infer Head, ...infer Tail]
			? [Apply<Fn, Head>, ...Apply<ApplyAll, Fn, Tail>]
			: []
		: this[ArgKey] extends [infer Fn extends unknown, ...any]
			? PartialApply<ApplyAll, [Fn]>
			: never
}

// Cap
export interface Cap extends Func {
	return: this[ArgKey] extends [infer Head extends string, ...any] ? Capitalize<Head> : never
}

// Extends
export interface Extends extends Func {
	return: this[ArgKey] extends [infer Head, Unset, ...any[]]
		? PartialApply<Extends, [Head]>
		: this[ArgKey] extends [infer Elem01, infer Elem02, ...any[]]
			? Elem02 extends Elem01
				? true
				: false
			: never
}

// Filter
export interface Filter extends Func {
	return: this[ArgKey] extends [infer Fn extends Func, infer Args extends unknown[], ...any]
		? Args extends [infer Head, ...infer Tail extends unknown[]]
			? Apply<Fn, Head> extends true
				? [Head, ...Apply<Filter, Fn, Tail>]
				: Apply<Filter, Fn, Tail>
			: []
		: this[ArgKey] extends [infer Fn extends unknown, ...any]
			? PartialApply<Filter, [Fn]>
			: never
}

// Push
export interface Push extends Func {
	return: this[ArgKey] extends [infer Head extends unknown, infer Tail extends unknown[], ...any]
		? [...Tail, Head]
		: this[ArgKey] extends [infer Head extends unknown, ...any]
			? PartialApply<Push, [Head]>
			: never
}
