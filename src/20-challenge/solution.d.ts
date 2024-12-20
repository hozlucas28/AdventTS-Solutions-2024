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

// Solution
type VariableDeclarations = ['const', 'let', 'var']

export type AnalyzeScope<
	T extends string,
	Declared extends string[] = [],
	Used extends string[] = [],
> = T extends `${infer Head}${infer Body}`
	? StringIn<Head, Alphabet> extends true
		? `${Head}${Body}` extends `${infer _} ${infer VarName} = ${infer _};${infer Body}`
			? AnalyzeScope<Body, [...Declared, VarName], Used>
			: `${Head}${Body}` extends `${infer _}(${infer FnArgument})${infer Body}`
				? AnalyzeScope<Body, Declared, [...Used, FnArgument]>
				: AnalyzeScope<Body, Declared, Used>
		: AnalyzeScope<Body, Declared, Used>
	: { declared: Declared; used: Used }
