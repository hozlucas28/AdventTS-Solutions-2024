export type Excuse<T extends object> = new (
	details: T & typeof existingExcuses
) => keyof T extends string
	? T[keyof T] extends string
		? `${keyof T}: ${T[keyof T]}`
		: unknown
	: unknown
