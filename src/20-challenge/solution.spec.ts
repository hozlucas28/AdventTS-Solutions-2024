import type { Equal, Expect } from 'type-testing'
import type { AnalyzeScope } from './solution'

describe('Challenge 20: extract variable declarations and function arguments to an object', () => {
	it('Test 01', () => {
		type Actual = AnalyzeScope<`
        let teddyBear = "standard_model";
        `>

		type Expected = {
			declared: ['teddyBear']
			used: []
		}

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Actual = AnalyzeScope<`
        buildToy(teddyBear);
        `>

		type Expected = {
			declared: []
			used: ['teddyBear']
		}

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		type Actual = AnalyzeScope<`
        let robotDog = "deluxe_model";
        assembleToy(robotDog);
        `>

		type Expected = {
			declared: ['robotDog']
			used: ['robotDog']
		}

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 04', () => {
		type Actual = AnalyzeScope<`
          let robotDog = "standard_model";
          const giftBox = "premium_wrap";
            var ribbon123 = "silk";
          \t
          wrapGift(giftBox);
          \r\n
              addRibbon(ribbon123);
        `>

		type Expected = {
			declared: ['robotDog', 'giftBox', 'ribbon123']
			used: ['giftBox', 'ribbon123']
		}

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 05', () => {
		type Actual = AnalyzeScope<'\n\t\r \t\r '>

		type Expected = {
			declared: []
			used: []
		}

		type Test = Expect<Equal<Actual, Expected>>
	})
})
