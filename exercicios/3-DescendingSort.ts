export function sorter(array: string[]) : string[] {
    return array.sort((a, b) => b.localeCompare(a));
}

/*
3. ORDENAÇÃO DECRESCENTE
   Ordene os elementos de um array de forma decrescente utilizando o método SORT do Array, passando uma arrow function como parâmetro.
   
   * Teste Unitário (3.1): Escreva um teste com o array ['carro', 'boneco', 'ave', 'lapis'].
*/