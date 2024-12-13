import type { Equal, Expect } from 'type-testing'
import type { FormatNames, Names } from './solution'

describe('Challenge 12: XXX', () => {
	it('Test 01', () => {
		type Actual = FormatNames<Names>['length']
		type Expected = 31682
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Actual = FormatNames<Names>[0]
		type Expected = {
			name: 'Liam'
			count: 20802
			rating: 'naughty'
		}

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		type Actual = FormatNames<Names>[11194]
		type Expected = {
			name: 'Yanni'
			count: 19
			rating: 'nice'
		}

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 04', () => {
		type Actual = FormatNames<Names>[2761]
		type Expected = {
			name: 'Petra'
			count: 148
			rating: 'nice'
		}

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 05', () => {
		type Actual = FormatNames<Names>[31680]
		type Expected = {
			name: 'Aala'
			count: 5
			rating: 'naughty'
		}

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 06', () => {
		type Actual = FormatNames<Names>[31681]
		type Expected = {
			name: 'Aagya'
			count: 5
			rating: 'nice'
		}

		type Test = Expect<Equal<Actual, Expected>>
	})
})
