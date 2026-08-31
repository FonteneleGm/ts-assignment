// Esse arquivo funciona como os ".txt" de teste para problemas de programação competitiva
import { squareFor, squareForEach } from './1-SquareElements.ts'; // Importa o arquivo

test('Calculates the squared value of each element.', () => {
  expect(squareFor([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1]);
  expect(squareForEach([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1]);

});