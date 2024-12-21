// Helpers
type Alphabet = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
]

type StringIn<T extends string, K extends string[]> = T extends K[number] ? true : false

type LeftJoin<T extends string[], K extends string[], Acc extends string[] = []> = T extends [
	infer THead extends string,
	...infer TRest extends string[],
]
	? StringIn<THead, K> extends true
		? LeftJoin<TRest, K, Acc>
		: LeftJoin<TRest, K, [...Acc, THead]>
	: Acc

// Solution
type VariableDeclarations = ['const', 'let', 'var']

export type Lint<
	T extends string,
	Declared extends string[] = [],
	Used extends string[] = [],
> = T extends `${infer Head}${infer Body}`
	? StringIn<Head, Alphabet> extends true
		? `${Head}${Body}` extends `${infer _} ${infer VarName} = ${infer _};${infer Body}`
			? Lint<Body, [...Declared, VarName], Used>
			: `${Head}${Body}` extends `${infer _}(${infer FnArgument})${infer Body}`
				? Lint<Body, Declared, [...Used, FnArgument]>
				: Lint<Body, Declared, Used>
		: Lint<Body, Declared, Used>
	: { scope: { declared: Declared; used: Used }; unused: LeftJoin<Declared, Used> }
