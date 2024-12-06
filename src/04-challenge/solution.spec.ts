import type { Equal, Expect, ExpectFalse } from 'type-testing'
import { survivalRatio } from './solution'

describe('Challenge 04: change the data type of the parameter for only allow numbers or strings', () => {
	it('Test 01', () => {
		type Actual = Parameters<typeof survivalRatio>[0]
		type Expected = number

		type Test = Expect<Equal<Exclude<Actual, string>, Expected>>
	})

	it('Test 02', () => {
		type Actual = Parameters<typeof survivalRatio>[0]
		type Expected = `${number} Q${number}`

		type Test = Expect<Equal<Exclude<Actual, number>, Expected>>
	})

	it('Test 03', () => {
		type Actual = Parameters<typeof survivalRatio>[0]
		type Expected = number | `${number} Q${number}`

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 04', () => {
		type Actual = Parameters<typeof survivalRatio>[0]
		type Expected = boolean

		type Test = ExpectFalse<Equal<Actual, Expected>>
	})

	it('Test 05', () => {
		type Actual = Parameters<typeof survivalRatio>[0]
		type Expected = number[]

		type Test = ExpectFalse<Equal<Actual, Expected>>
	})

	it('Test 06', () => {
		type Actual = Parameters<typeof survivalRatio>[0]
		type Expected = Record<number, number>

		type Test = ExpectFalse<Equal<Actual, Expected>>
	})
})
