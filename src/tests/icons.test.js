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

test('setSizeHelper stops subtracting after size = 1em', () => {
	let size = setSizeHelper({width: "1em", height: "1em"})
	expect(size).toHaveProperty('width', "1.0em")
	expect(size).toHaveProperty('height', "1.0em")
})

test('setSizeHelper stops adding after size = 4em', () => {
	let size = setSizeHelper({width: "4em", height: "4em"}, "plus")
	expect(size).toHaveProperty('width', "4.0em")
	expect(size).toHaveProperty('height', "4.0em")
})