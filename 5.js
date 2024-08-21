// Declaração do array numeros
let numeros = [10, 20, 30, 40, 50];

numeros.push(60);
console.log(numeros); 

let ultimoValor = numeros.pop();
console.log(ultimoValor); 
console.log(numeros); 

numeros.splice(2, 1);
console.log(numeros); 

numeros.sort((a, b) => b - a);
console.log(numeros); 