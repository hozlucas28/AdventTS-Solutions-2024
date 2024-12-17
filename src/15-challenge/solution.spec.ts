import type { Equal, Expect } from 'type-testing'
import type { GetRoute } from './solution'

describe('Challenge 15: get the fuel needed to travel between locations', () => {
	it('Test 01', () => {
		type Actual = GetRoute<''>
		type Expected = []

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Actual = GetRoute<'north_pole'>
		type Expected = [['north_pole', 0]]

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		type Actual = GetRoute<'--a-b'>
		type Expected = [['a', 0], ['b', 1]]

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 04', () => {
		type Actual = GetRoute<'a-b--'>
		type Expected = [['a', 0], ['b', 1]]

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 05', () => {
		type Actual = GetRoute<'north pole-candy.cane'>
		type Expected = [['north pole', 0], ['candy.cane', 1]]

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 06', () => {
		type Actual = GetRoute<'a--------------------------------------------------b'>
		type Expected = [['a', 0], ['b', 50]]

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 07', () => {
		type Actual = GetRoute<'a--a-a---a'>
		type Expected = [['a', 0], ['a', 2], ['a', 1], ['a', 3]]

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 08', () => {
		type Actual = GetRoute<'north_pole--candycane_forest----gumdrop_sea-------hawaii'>
		type Expected = [['north_pole', 0], ['candycane_forest', 2], ['gumdrop_sea', 4], ['hawaii', 7]]

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 09', () => {
		type Actual = GetRoute<'a-b-c-d'>
		type Expected = [['a', 0], ['b', 1], ['c', 1], ['d', 1]]

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 10', () => {
		type Actual = GetRoute<'🎅--🎄---🏠----🤶'>
		type Expected = [['🎅', 0], ['🎄', 2], ['🏠', 3], ['🤶', 4]]

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 11', () => {
		type Actual = GetRoute<'a--b----c-d---e'>
		type Expected = [['a', 0], ['b', 2], ['c', 4], ['d', 1], ['e', 3]]

		type Test = Expect<Equal<Actual, Expected>>
	})
})
