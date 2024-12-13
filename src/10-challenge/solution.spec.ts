import type { Gift } from './solution'

const Equal = <T extends Gift>(flag: T) => flag

describe('Challenge 10: XXX', () => {
	it('Test 01', () => {
		type Actual = Gift.Coal
		const Expected = 0
		Equal<Actual>(Expected)
	})

	it('Test 02', () => {
		type Actual = Gift.Train
		const Expected = 1
		Equal<Actual>(Expected)
	})

	it('Test 03', () => {
		type Actual = Gift.Bicycle
		const Expected = 2
		Equal<Actual>(Expected)
	})

	it('Test 04', () => {
		type Actual = Gift.SuccessorToTheNintendoSwitch
		const Expected = 4
		Equal<Actual>(Expected)
	})

	it('Test 05', () => {
		type Actual = Gift.TikTokPremium
		const Expected = 8
		Equal<Actual>(Expected)
	})

	it('Test 06', () => {
		type Actual = Gift.Vape
		const Expected = 16
		Equal<Actual>(Expected)
	})

	it('Test 07', () => {
		type Actual = Gift.Traditional
		const Expected = 3
		Equal<Actual>(Expected)
	})

	it('Test 08', () => {
		type Actual = Gift.OnTheMove
		const Expected = 26
		Equal<Actual>(Expected)
	})

	it('Test 09', () => {
		type Actual = Gift.OnTheCouch
		const Expected = 28
		Equal<Actual>(Expected)
	})

	it('Test 10', () => {
		type Actual = Gift.Coal
		const Expected = 10

		// @ts-expect-error
		Equal<Actual>(Expected)
	})

	it('Test 11', () => {
		type Actual = Gift.Train
		const Expected = 11

		// @ts-expect-error
		Equal<Actual>(Expected)
	})

	it('Test 12', () => {
		type Actual = Gift.Bicycle
		const Expected = 12

		// @ts-expect-error
		Equal<Actual>(Expected)
	})

	it('Test 13', () => {
		type Actual = Gift.SuccessorToTheNintendoSwitch
		const Expected = 14

		// @ts-expect-error
		Equal<Actual>(Expected)
	})

	it('Test 14', () => {
		type Actual = Gift.TikTokPremium
		const Expected = 18

		// @ts-expect-error
		Equal<Actual>(Expected)
	})

	it('Test 15', () => {
		type Actual = Gift.Vape
		const Expected = 116

		// @ts-expect-error
		Equal<Actual>(Expected)
	})

	it('Test 16', () => {
		type Actual = Gift.Traditional
		const Expected = 13

		// @ts-expect-error
		Equal<Actual>(Expected)
	})

	it('Test 17', () => {
		type Actual = Gift.OnTheMove
		const Expected = 126

		// @ts-expect-error
		Equal<Actual>(Expected)
	})

	it('Test 18', () => {
		type Actual = Gift.OnTheCouch
		const Expected = 124

		// @ts-expect-error
		Equal<Actual>(Expected)
	})
})
