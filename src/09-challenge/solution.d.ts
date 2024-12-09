declare module 'santas-special-list' {
	interface Child {
		name: string
		status: Status
	}

	type List = Child[]
	type Status = 'naughty' | 'nice'
}
