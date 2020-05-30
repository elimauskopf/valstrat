import { setSizeHelper } from '../Icons'

test('setSizeHelper adds to size correctly', () => {
	let size = setSizeHelper({width: "2.5em", height: "2.5em"}, "plus")
	expect(size).toHaveProperty('width', "2.6em")
	expect(size).toHaveProperty('height', "2.6em")
})

test('setSizeHelper subtracts from size correctly', () => {
	let size = setSizeHelper({width: "2.5em", height: "2.5em"})
	expect(size).toHaveProperty('width', "2.4em")
	expect(size).toHaveProperty('height', "2.4em")
})

test('setSizeHelper stops subtracting after size = .1em', () => {
	let size = setSizeHelper({width: "0.1em", height: "0.1em"})
	expect(size).toHaveProperty('width', "0.1em")
	expect(size).toHaveProperty('height', "0.1em")
})