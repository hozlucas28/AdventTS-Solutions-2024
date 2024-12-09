import type { Child, List, Status } from 'santas-special-list'
import type { Equal, Expect } from 'type-testing'

describe('Challenge 01: add types to the third party NPM package', () => {
	it('Test 01', () => {
		type Actual = Status
		type Expected = 'naughty' | 'nice'

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Actual = Child
		type Expected = {
			name: string
			status: Status
		}

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		type Actual = List
		type Expected = Child[]

		type Test = Expect<Equal<Actual, Expected>>
	})
})
