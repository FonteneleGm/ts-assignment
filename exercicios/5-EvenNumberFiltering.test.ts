import { filters } from './5-EvenNumberFiltering.ts'

test('Filters only the even numbers.', () => {
    expect(filters([8, 3, 9, 5, 6, 12])).toEqual([8, 6, 12]);
})
