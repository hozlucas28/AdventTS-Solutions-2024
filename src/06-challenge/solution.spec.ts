import type { Equal, Expect, ExpectFalse } from 'type-testing'
import { createRoute } from './solution'

describe('Challenge 06: change the data type of the function to return the same data type which it receives (without specifying it), but only allowing numbers or strings', () => {
	it('Test 01', () => {
		const fnResult = createRoute('🌩️Donner', 100_000_000)

		type Actual = typeof fnResult
		type Expected = 100_000_000

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		const fnResult = createRoute('🔴Rudolph', 2)

		type Actual = typeof fnResult
		type Expected = 2

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		const fnResult = createRoute('💨Dasher', '3')

		type Actual = typeof fnResult
		type Expected = '3'

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 04', () => {
		// @ts-expect-error
		const fnResult = createRoute('🌟Vixen', true) as true

		type Actual = typeof fnResult
		type Expected = number | string

		type Test = ExpectFalse<Equal<Actual, Expected>>
	})

	it('Test 05', () => {
		// @ts-expect-error
		const fnResult = createRoute('💃Dancer', [1]) as number[]

		type Actual = typeof fnResult
		type Expected = number | string

		type Test = ExpectFalse<Equal<Actual, Expected>>
	})

	it('Test 06', () => {
		// @ts-expect-error
		const fnResult = createRoute('☄️Comet', { 1: 1 }) as { 1: number }

		type Actual = typeof fnResult
		type Expected = number | string

		type Test = ExpectFalse<Equal<Actual, Expected>>
	})
})
