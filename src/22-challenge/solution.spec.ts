import type { Equal, Expect } from 'type-testing'
import type { Parse } from './solution'

describe('Challenge 22: decode a JSON to literal TypeScript types', () => {
	it('Test 01', () => {
		type Actual = Parse<`{
        "a": 1,
        "b": false,
        "c": [
          true,
          false,
          "hello",
          {
            "a": "b",
            "b": false
          },
        ],
        "nil": null,
        }`>

		type Expected = {
			a: 1
			b: false
			c: [true, false, 'hello', { a: 'b'; b: false }]
			nil: null
		}

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Actual = Parse<'1'>
		type Expected = 1
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		type Actual = Parse<'{}'>
		type Expected = {}
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 04', () => {
		type Actual = Parse<'[]'>
		type Expected = []
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 05', () => {
		type Actual = Parse<'[1]'>
		type Expected = [1]
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 06', () => {
		type Actual = Parse<'true'>
		type Expected = true
		type Test = Expect<Equal<Actual, Expected>>
	})

    it('Test 07', () => {
        type t6_actual = Parse<'["Hello", true, false, null]'>
				type t6_expected = ['Hello', true, false, null]

		type Actual = Parse<'["Hello", true, false, null]'>
		type Expected = ['Hello', true, false, null]
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 08', () => {
		type Actual = Parse<'{"hello\\r\\n\\b\\f": "world"}'>
		type Expected = { 'hello\r\n\b\f': 'world' }
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 09', () => {
		type Actual = Parse<'{ 1: "world" }'>
		type Expected = { 1: 'world' }
		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 10', () => {
		type Actual = Parse<`{
        "altitude": 123,
        "warnings": [
          "low_fuel",\t\n
          "strong_winds",
        ],
        }`>

		type Expected = {
			altitude: 123
			warnings: ['low_fuel', 'strong_winds']
		}

		type Test = Expect<Equal<Actual, Expected>>
	})
})
