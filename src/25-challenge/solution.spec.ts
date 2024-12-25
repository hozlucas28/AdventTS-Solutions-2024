import type { Equal, Expect } from 'type-testing'
import type { ThankYouSoMuch } from './solution'

describe('Challenge 25: the end of the journey', () => {
	it('Test 01', () => {
		type Actual = ThankYouSoMuch
		type Expected = true
		type Test = Expect<Equal<Actual, Expected>>
	})
})
