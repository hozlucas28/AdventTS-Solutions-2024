import type { Equal, Expect } from 'type-testing'
import type { PerfReview } from './solution'

describe('Challenge 19: get the literal types of function generators returns', () => {
	it('Test 01', () => {
		async function* numberAsyncGenerator() {
			yield 1
			yield 2
			yield 3
		}

		type Actual = PerfReview<ReturnType<typeof numberAsyncGenerator>>
		type Expected = 1 | 2 | 3

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		async function* stringAsyncGenerator() {
			yield '1%'
			yield '2%'
		}

		type Actual = PerfReview<ReturnType<typeof stringAsyncGenerator>>
		type Expected = '1%' | '2%'

		type Test = Expect<Equal<Actual, Expected>>
	})
})
