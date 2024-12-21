import type { Equal, Expect } from 'type-testing'
import type { Lint } from './solution'

describe('Challenge 21: improve the challenge 20 to include unused variable declarations', () => {
	it('Test 01', () => {
		type Actual = Lint<`
        let teddyBear = "standard_model";
        `>

		type Expected = {
			scope: { declared: ['teddyBear']; used: [] }
			unused: ['teddyBear']
		}

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 02', () => {
		type Actual = Lint<`
        buildToy(teddyBear);
        `>

		type Expected = {
			scope: {
				declared: []
				used: ['teddyBear']
			}
			unused: []
		}

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 03', () => {
		type Actual = Lint<`
        let robotDog = "deluxe_model";
        assembleToy(robotDog);
        `>

		type Expected = {
			scope: {
				declared: ['robotDog']
				used: ['robotDog']
			}
			unused: []
		}

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 04', () => {
		type Actual = Lint<`
        let robotDog = "standard_model";
          const giftBox = "premium_wrap";
            var ribbon123 = "silk";
          \t
          wrapGift(giftBox);
          \r\n
              addRibbon(ribbon123);
        `>

		type Expected = {
			scope: {
				declared: ['robotDog', 'giftBox', 'ribbon123']
				used: ['giftBox', 'ribbon123']
			}
			unused: ['robotDog']
		}

		type Test = Expect<Equal<Actual, Expected>>
	})

	it('Test 05', () => {
		type Actual = Lint<'\n\t\r \t\r '>

		type Expected = {
			scope: {
				declared: []
				used: []
			}
			unused: []
		}

		type Test = Expect<Equal<Actual, Expected>>
	})
})
