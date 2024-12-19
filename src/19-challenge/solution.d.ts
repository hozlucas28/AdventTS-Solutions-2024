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

type VarObject = {
	id: string
	type: 'VariableDeclaration'
}

type FnCallObject = {
	argument: string
	type: 'CallExpression'
}

export type Parse<
	T extends string,
	Acc extends (VarObject | FnCallObject)[] = [],
> = T extends `${infer Head}${infer Body}`
	? StringIn<Head, Alphabet> extends true
		? T extends `${infer VarDeclaration} ${infer VarName} = ${infer _Value};${infer Body}`
			? StringIn<VarDeclaration, VariableDeclarations> extends true
				? Parse<Body, [...Acc, { id: VarName; type: 'VariableDeclaration' }]>
				: Parse<Body, Acc>
			: T extends `${infer _FnName}(${infer FnArg});${infer Body}`
				? Parse<Body, [...Acc, { argument: FnArg; type: 'CallExpression' }]>
				: Parse<Body, Acc>
		: Parse<Body, Acc>
	: Acc
