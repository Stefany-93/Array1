let numbers = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

let crescente = numbers.sort((a, b) => a - b);

console.log(crescente);

let decrescente = crescente.reverse();

console.log(decrescente);