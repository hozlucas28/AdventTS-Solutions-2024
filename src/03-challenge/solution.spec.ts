import type { Equal, Expect, ExpectFalse } from 'type-testing'
import type { survivalRatio } from './solution'

describe('Challenge 03: change the data type of the parameter for only allow numbers', () => {
	it('Test 01', () => {
		const argument: number = 2009

		type Actual = typeof argument
		type Expected = Parameters<typeof survivalRatio>[0]

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		const argument: string = '1'

		type Actual = typeof argument
		type Expected = Parameters<typeof survivalRatio>[0]

		type Test = ExpectFalse<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		const argument: boolean = true

		type Actual = typeof argument
		type Expected = Parameters<typeof survivalRatio>[0]

		type Test = ExpectFalse<Equal<Actual, Expected>>
	})

	it('Test 04', () => {
		const argument: number[] = [1]

		type Actual = typeof argument
		type Expected = Parameters<typeof survivalRatio>[0]

		type Test = ExpectFalse<Equal<Actual, Expected>>
	})

	it('Test 05', () => {
		const argument: Record<number, number> = { 1: 1 }

		type Actual = typeof argument
		type Expected = Parameters<typeof survivalRatio>[0]

		type Test = ExpectFalse<Equal<Actual, Expected>>
	})
})
