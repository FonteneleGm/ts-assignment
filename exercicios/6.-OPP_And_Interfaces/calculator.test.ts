import { Sums, Subtracts } from './calculator.ts'

test('Calculates sums and subtractions with classes.', () => {
    //instanciei
    const sumInstance = new Sums(2, 2);
    const subtractsInstance = new Subtracts(4, 2);
    
    expect(sumInstance.calculates()).toEqual(4);
    expect(subtractsInstance.calculates()).toEqual(2);

    sumInstance.valueN1 = 5;
    sumInstance.valueN2 = 5;

    subtractsInstance.firstNumber = 6;
    subtractsInstance.secondNumber = 6;

    expect(sumInstance.calculates()).toEqual(10);
    expect(subtractsInstance.calculates()).toEqual(0);

});