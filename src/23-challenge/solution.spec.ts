import type { Equal, Expect } from 'type-testing'
import type { Apply, ApplyAll, Cap, Extends, Filter, Push } from './solution'

describe('Challenge 23: create a type to apply operations (other types) to values', () => {
	it('Test 01', () => {
		type Actual = Apply<Cap, 'hello'>
		type Expected = 'Hello'

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Actual = Apply<Apply<Push, 'world'>, ['hello']>
		type Expected = ['hello', 'world']

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		type Actual = Apply<Apply<ApplyAll, Cap>, Apply<Apply<Push, 'world'>, ['hello']>>
		type Expected = ['Hello', 'World']

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 04', () => {
		type Actual = Apply<Apply<Filter, Apply<Extends, number>>, [1, 'foo', 2, 3, 'bar', true]>
		type Expected = [1, 2, 3]

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 05', () => {
		type Station01 = Apply<Cap, 'robot'> // => // "Robot"
		type Station02 = Apply<Apply<Push, Station01>, ['Tablet', 'teddy bear']> // => ["Tablet", "teddy bear", "Robot"]

		type Actual = Apply<Apply<Filter, Apply<Extends, Apply<Cap, string>>>, Station02>
		type Expected = ['Tablet', 'Robot']

		type Test = Expect<Equal<Actual, Expected>>
	})
})
