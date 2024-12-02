import type { Equal, Expect } from 'type-testing'
import type { Demand } from './solution'

describe('Challenge 02: create a type which returns a literal number', () => {
	it('Test 01', () => {
		type Actual = Demand
		type Expected = 900_000
		type Test = Expect<Equal<Actual, Expected>>
	})
})
