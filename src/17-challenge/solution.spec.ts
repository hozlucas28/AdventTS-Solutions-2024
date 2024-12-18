import type { Equal, Expect } from 'type-testing'
import { compose, firstChar, firstItem, lowerCase, makeBox, makeTuple, upperCase } from './solution'

describe('Challenge 17: infer the literal return type of a compose function', () => {
	it('Test 01', () => {
		const fnReturn = compose(upperCase, makeTuple, makeBox)('hello!').value[0]

		type Actual = typeof fnReturn
		type Expected = 'HELLO!'

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		const fnReturn = compose(makeTuple, firstItem, makeBox)('hello!' as const).value

		type Actual = typeof fnReturn
		type Expected = 'hello!'

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		const fnReturn = compose(upperCase, firstChar, lowerCase)('hello!')

		type Actual = typeof fnReturn
		type Expected = 'h'

		type Test = Expect<Equal<Actual, Expected>>
	})
})
