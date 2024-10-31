"use strict";

//for it
var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}

//Metodo forEach - acessando o indice 
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});

//Metodo MAP - trasfromando arrays de strinngs em objetos 
var alunos = ['Carlos', 'Paulo', 'Maria', 'Julia'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'frontend'
  };
});

// const numeros = [1, 2, 3, 4, 5]
// const dobroNumeros = numeros.map(function(numeroAtual){
//     return numeroAtual *2;
// })

console.log(alunos2);
// console.log(dobroNumeros);

//Metodo que procura e retorna um item(find)  dentro de um array
var maria = alunos2.find(function (itemAtual) {
  return itemAtual.nome == 'Maria'; // true ou false (boolean)
});
console.log(maria);

//Metodo que retorna o indice(findIndex >=0) do item dentro de um array
var indiceDoPaulo = alunos2.findIndex(function (itemAtual) {
  return itemAtual.nome == 'Paulo';
});
console.log(indiceDoPaulo);
alunos2.push({
  nome: 'Ivana',
  curso: 'backend'
});
//Verifica os valores dentro de um array
//every - todos
var todosAlunosSaoFrontend = alunos2.every(function (itemAtual) {
  return itemAtual.curso === 'frontend';
});
console.log(todosAlunosSaoFrontend);

//Verifica se pelo menos um item dentro de um array satisfaz a condição
var existeAlgumAlunoBackend = alunos2.some(function (itemAtual) {
  return itemAtual.curso === 'backend' && itemAtual.curso === 'frontend';
});
console.log(existeAlgumAlunoBackend);

//Criando uma funcao
function filtraAlunosBackend(aluno) {
  return aluno.curso === 'backend';
}
//criando a mesma funcao acima com arrow function
// const filtraAlunosBackend = (aluno) => aluno.curso === 'backend';

//Filtrando itens de arrays
var alunosDeBackend = alunos2.filter(filtraAlunosBackend);
console.log(alunosDeBackend);

//Reduzindo conteudo de um array em um unico valor (reduce)
var nuns = [10, 20, 30, 10];
var soma = nuns.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);

//Reduzindo conteudo de um array em um unico valor com (for)
var somaComFor = 0;
for (var _i = 0; _i < nuns.length; _i++) {
  somaComFor += nuns[_i];
}
console.log(somaComFor);
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);

// Dicas:
// No metodo for it, so conseguimos iterar e nao retornamos nada, diferentemente do map;
// No metodo map conseguimos interar no array, fazer modificações, e ainda retornar o array modificado.
// No metodo find conseguimos encontrar um item dentro de um array,
// No metodo findIndex conseguimos retornar o indice do item dentro de um array
// No metodo every, conseguimos retornar se TODOS itens dentro de um array eles satisfazem um predicado(uma condição)
// No metodo some, ele é mais tolerante precisando apenas que um item dentro de um array satisfaça a condição