import type { Equal, Expect } from 'type-testing'
import { createRoute } from './solution'

describe('Challenge 07: infer the literal data type of a function parameter', () => {
	it('Test 01', () => {
		const result = createRoute('💨Dasher', ['Atherton', 'Scarsdale', 'Cherry Hills Village']).route

		type Actual = typeof result
		type Expected = ['Atherton', 'Scarsdale', 'Cherry Hills Village']

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		const result = createRoute('🌟Vixen', ['Detroit', 'Cleveland', 'Dayton']).route

		type Actual = typeof result
		type Expected = ['Detroit', 'Cleveland', 'Dayton']

		type Test = Expect<Equal<Actual, Expected>>
	})
})
