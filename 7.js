function soma(a, b) {
    return a + b;
}
  
console.log(soma(5, 3)); // 8

function ehPar(numero) {
    return numero % 2 === 0;
}
  
console.log(ehPar(4)); 
console.log(ehPar(5)); 

function dobraValores(valores) {
    return valores.map(valor => valor * 2);
}

  console.log(dobraValores([1, 2, 3])); 

function contaCaracteres(string) {
    return string.length;
}
  
console.log(contaCaracteres("Olá, mundo!")); 

function fatorial(numero) {
    if (numero === 0) {
      return 1;
    }
    return numero * fatorial(numero - 1);
  }
  
console.log(fatorial(5)); 