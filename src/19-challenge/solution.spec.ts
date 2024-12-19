import type { Equal, Expect } from 'type-testing'
import type { Parse } from './solution'

describe('Challenge 19: extract variable declarations and function calls to an object', () => {
	it('Test 01', () => {
		type Actual = Parse<`
        let teddyBear = "standard_model";
        `>

		type Expected = [
			{
				id: 'teddyBear'
				type: 'VariableDeclaration'
			},
		]

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Actual = Parse<`
        buildToy(teddyBear);
        `>

		type Expected = [
			{
				argument: 'teddyBear'
				type: 'CallExpression'
			},
		]

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		type Actual = Parse<`
        let robotDog = "deluxe_model";
        assembleToy(robotDog);
        `>

		type Expected = [
			{
				id: 'robotDog'
				type: 'VariableDeclaration'
			},
			{
				argument: 'robotDog'
				type: 'CallExpression'
			},
		]

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 04', () => {
		type Actual = Parse<`
          const giftBox = "premium_wrap";
            var ribbon123 = "silk";
          \t
          wrapGift(giftBox);
          \r\n
              addRibbon(ribbon123);
        `>

		type Expected = [
			{
				id: 'giftBox'
				type: 'VariableDeclaration'
			},
			{
				id: 'ribbon123'
				type: 'VariableDeclaration'
			},
			{
				argument: 'giftBox'
				type: 'CallExpression'
			},
			{
				argument: 'ribbon123'
				type: 'CallExpression'
			},
		]

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 05', () => {
		type Actual = Parse<'\n\t\r \t\r '>

		type Expected = []

		type Test = Expect<Equal<Actual, Expected>>
	})
})
