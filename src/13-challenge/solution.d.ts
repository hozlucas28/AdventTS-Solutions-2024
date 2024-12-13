export type Demand<T> = {
	demand: T extends T ? T : T
}
