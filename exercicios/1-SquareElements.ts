export function squareFor(values: number[]) : number[]{
    const Answer: number[] = [];

    for (let i = 0; i < values.length; i++){
        Answer.push(values[i] * values[i]);
    }

    return Answer;
}

export function squareForEach(values: number[]) : number[]{
    const Answer: number[] = [];

    values.forEach(value => {
        Answer.push(value * value);
    });

    return Answer;
}

/*
1. ELEVAR ELEMENTOS AO QUADRADO
   Crie um programa que calcule o quadrado de cada elemento de um array utilizando duas estratégias:
   a) Iterando com "for" simples.
   b) Iterando com "forEach".
   
   * Teste Unitário (1.1): Escreva um teste com o array [3, 5, 7, 3, 8, 9, 1].
*/