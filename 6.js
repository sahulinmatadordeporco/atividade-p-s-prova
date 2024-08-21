let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor",
    endereco: {
      rua: "Rua dos Pinheiros",
      cidade: "São Paulo",
      estado: "SP"
    }
  };
  
  
pessoa.apresentacao = function() {
    return `Olá, eu sou ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
  }; 

console.log(pessoa.endereco.cidade); 
  
pessoa.profissao = "Engenheiro";
console.log(pessoa); 
  
pessoa.telefone = "11 99999-8888";
console.log(pessoa); 
  
console.log(pessoa.apresentacao()); 