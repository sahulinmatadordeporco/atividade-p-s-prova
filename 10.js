function executaOperacao(num1, num2, operacao) {
    return operacao(num1, num2);
}
  
function soma(a, b) {
    return a + b;
}
  
function multiplicacao(a, b) {
    return a * b;
}
  
console.log(executaOperacao(2, 3, soma)); 
  
console.log(executaOperacao(2, 3, multiplicacao)); 
  

function repetirOperacao(vezes, operacao, num1, num2) {
    for (let i = 0; i < vezes; i++) {
      console.log(`Iteração ${i + 1}: ${operacao(num1, num2)}`);
    }
}
  

repetirOperacao(3, soma, 2, 3);

repetirOperacao(2, multiplicacao, 2, 3);

function contarOcorrencias(str, char) {
    let count = 0;
    [...str].forEach(c => {
      if (c === char) {
        count++;
      }
    });
    return count;
  }
  
console.log(contarOcorrencias("hello world", "o")); 