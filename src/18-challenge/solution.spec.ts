import type { Equal, Expect } from 'type-testing'
import { createStreetLight } from './solution'

describe('Challenge 18: prevent infer of the second argument and only allowing the literal types of the first argument', () => {
	const colors = ['red' as const, 'yellow' as const, 'green' as const]
	type Color = (typeof colors)[number]

	it('Test 01', () => {
		const fnReturn = createStreetLight(colors, 'red')

		type Actual = typeof fnReturn
		type Expected = 'red' | 'yellow' | 'green'

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		const fnReturn = createStreetLight<Color>(colors, 'red')

		type Actual = typeof fnReturn
		type Expected = 'red' | 'yellow' | 'green'

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		// @ts-expect-error
		createStreetLight(colors, 'blue')
	})

	it('Test 04', () => {
		// @ts-expect-error
		createStreetLight<Color, 'red'>(colors, 'red')
	})

	it('Test 05', () => {
		// @ts-expect-error
		createStreetLight<Color, 'blue'>(colors, 'blue')
	})

	it('Test 06', () => {
		// @ts-expect-error
		createStreetLight<Color>(colors, 'blue')
	})
})
