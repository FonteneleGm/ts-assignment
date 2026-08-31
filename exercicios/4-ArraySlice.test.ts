import { extract } from './4-ArraySlice.ts'

test('Extracy only 2 elements from the array.', () => {
    expect(extract([2, 4, 6, 2, 8, 9, 5])).toEqual([2, 4])
});