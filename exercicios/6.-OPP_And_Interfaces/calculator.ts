import { Calculator } from './interface.js';

export class Sums implements Calculator {
    valueN1: number; 
    valueN2: number;

    constructor(valueN1: number, valueN2: number) {
        this.valueN1 = valueN1;
        this.valueN2 = valueN2;
    }

    calculates(): number {
        return this.valueN1 + this.valueN2;
    }
}

export class Subtracts implements Calculator {
    firstNumber: number;
    secondNumber: number;

    constructor(firstNumber: number, secondNumber: number) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }

    calculates(): number {
        return this.firstNumber - this.secondNumber;
    }
}