// Helpers
type Whitespace = ' ' | '\n' | '\r' | '\t'

type Number = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

type EscapeChar = {
	'\\': '\\'
	b: '\b'
	f: '\f'
	n: '\n'
	r: '\r'
	t: '\t'
	'"': '"'
}

type Trim<T extends string> = T extends `${Whitespace}${infer Body}`
	? Trim<Body>
	: T extends `${infer Body}${Whitespace}`
		? Trim<Body>
		: T

type RemoveComma<S extends string> = S extends `${Whitespace}${infer R}`
	? RemoveComma<R>
	: S extends `,${infer R}`
		? Trim<R>
		: S

type ParseValue<T extends string> =
	| ParseNumber<T>
	| ParseString<T>
	| ParseBoolean<T>
	| ParseNull<T>
	| ParseArray<T>
	| ParseObject<T>

type ParseNumber<T extends string, K extends string = ''> = T extends `${infer Value extends
	Number}${infer Body}`
	? ParseNumber<Body, `${K}${Value}`>
	: K extends `${infer Head extends number}`
		? [Head, T]
		: never

type ParseString<T extends string> = T extends `"${infer Body}` ? ParseStringBody<Body> : never

type ParseStringBody<
	T extends string,
	K extends string = '',
> = T extends `${infer Head}${infer Body}`
	? Head extends '"'
		? [K, Body]
		: Head extends '\\'
			? Body extends `${infer Escape extends keyof EscapeChar}${infer Body}`
				? ParseStringBody<Body, `${K}${EscapeChar[Escape]}`>
				: never
			: ParseStringBody<Body, `${K}${Head}`>
	: never

type ParseBoolean<T extends string> = T extends `true${infer Body}`
	? [true, Body]
	: T extends `false${infer Body}`
		? [false, Body]
		: never

type ParseNull<T extends string> = T extends `null${infer Body}` ? [null, Body] : never

type ParseArray<T extends string> = T extends `[${infer Head}` ? ParseArrayBody<Head> : never

type ParseArrayBody<T extends string, Acc extends unknown[] = []> = T extends `]${infer Body}`
	? [Acc, Body]
	: ParseValue<Trim<T>> extends [infer Value, infer Body extends string]
		? ParseArrayBody<RemoveComma<Body>, [...Acc, Value]>
		: never

type ParseObject<T extends string> = T extends `{${infer Body}` ? ParseObjectBody<Body> : never

type ParseObjectBody<
	T extends string,
	Obj extends Record<any, unknown> = {},
> = T extends `}${infer Body01}`
	? [Obj, Body01]
	: ParseValue<Trim<T>> extends [infer Head extends string | number, infer Body02 extends string]
		? Trim<Body02> extends `:${infer Body03}`
			? ParseValue<Trim<Body03>> extends [infer Value, infer Body04 extends string]
				? ParseObjectBody<
						RemoveComma<Body04>,
						{ [Char in Head | keyof Obj]: Char extends Head ? Value : Obj[Char] }
					>
				: never
			: never
		: never

// Solution
export type Parse<T extends string> =
	ParseValue<Trim<T>> extends [infer Parsed, ''] ? Parsed : never
