import { sums, Subtracts } from './calculator.ts'

test('Calculates sums and subtractions with classes.', () => {
    //instanciei
    const sums = new sums(2, 2);
    const subtracts = new subtracts(4, 2);
    
    expect(sums.calculates()).toEqual(4);
    expect(subtracts.calculates()).toEqual(2);

    sums.valueN1 = 5;
    sums.valueN2 = 5;

    subtracts.firstNumber = 6;
    subtracts.secondNumber = 6;

    expect(sums.calculates()).toEqual(10);
    expect(subtracts.calculates()).toEqual(0);

});