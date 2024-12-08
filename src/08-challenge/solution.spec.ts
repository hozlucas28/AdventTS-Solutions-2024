import type { Equal, Expect } from 'type-testing'

describe('Challenge 08: extend global types of NodeJS environment variables', () => {
	it('Test 01', () => {
		const { MOOD_LIGHTS } = process.env

		type Actual = typeof MOOD_LIGHTS
		type Expected = 'true'

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		const { BATH_TEMPERATURE } = process.env

		type Actual = typeof BATH_TEMPERATURE
		type Expected = '327.59'

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		const { STRAWBERRIES } = process.env

		type Actual = typeof STRAWBERRIES
		type Expected = 'chocolate'

		type Test = Expect<Equal<Actual, Expected>>
	})
})
