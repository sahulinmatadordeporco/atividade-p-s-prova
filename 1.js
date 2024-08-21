let texto = "Aprendendo JavaScript é divertido e recompensador!";

console.log(texto.toUpperCase()); 

console.log(texto.includes("divertido")); 

let palavras = texto.split(" ");
console.log(palavras); 

let textoJuntado = palavras.join("-");
console.log(textoJuntado);