import { Concatenating } from './2-StringConcat.ts';

test('Concatenating strings', () => {
   expect(Concatenating(['Arrays', 'com', 'TypeScript'])).toEqual('Arrays com TypeScript')
})