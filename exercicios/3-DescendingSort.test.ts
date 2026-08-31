import { sorter } from './3-DescendingSort.ts'

test('Sort numbers in descending way', () => {
    expect(sorter(['carro', 'boneco', 'ave', 'lapis'])).toEqual(['lapis', 'carro', 'boneco', 'ave'])
});