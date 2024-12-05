import type { Equal, Expect } from 'type-testing'
import { createRoute } from './solution'

describe('Challenge 05: change the data type of the function to return the same data type which it receives (without specifying it)', () => {
	it('Test 01', () => {
		const fnResult = createRoute('💨Dasher', 100_000_000)

		type Actual = typeof fnResult
		type Expected = 100_000_000

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		const fnResult = createRoute('💃Dancer', 2)

		type Actual = typeof fnResult
		type Expected = 2

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		const fnResult = createRoute('🦌Prancer', 2)

		type Actual = typeof fnResult
		type Expected = 2

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 04', () => {
		const fnResult = createRoute('🌟Vixen', '1')

		type Actual = typeof fnResult
		type Expected = '1'

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 05', () => {
		const fnResult = createRoute('☄️Comet', true)

		type Actual = typeof fnResult
		type Expected = true

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 06', () => {
		const fnResult = createRoute('❤️Cupid', [1])

		type Actual = typeof fnResult
		type Expected = number[]

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 07', () => {
		const fnResult = createRoute('🌩️Donner', { 1: 1 })

		type Actual = typeof fnResult
		type Expected = { 1: number }

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 08', () => {
		const fnResult = createRoute('⚡Blitzen', Symbol('🔴 === evil'))

		type Actual = typeof fnResult
		type Expected = symbol

		type Test = Expect<Equal<Actual, Expected>>
	})
})
