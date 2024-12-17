type Currying<T extends (...args: any[]) => any> = <K extends unknown[]>(
	...args: Parameters<T> extends [...K, ...unknown[]] ? K : []
) => Parameters<T> extends [...K, ...infer Rest]
	? Currying<(...args: Rest) => ReturnType<T>>
	: Currying<T>

export declare function DynamicParamsCurrying<T extends (...args: any[]) => any>(fn: T): Currying<T>
