import type { Equal, Expect } from 'type-testing'
import type { Demand } from './solution'

describe('Challenge 01: introduction to the Advent of TypeScript platform', () => {
	it('Test 01', () => {
		type Actual = Demand
		type Expected = number
		type Test = Expect<Equal<Actual, Expected>>
	})
})
