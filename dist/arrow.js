"use strict";

var _this = void 0;
//Arrow Function - Torna o retorno direto, simplificando o return
var minhaFuncao = function minhaFuncao() {
  return 'diz ola arrow';
};

//retornando um objeto
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: 'ka',
    fabricante: 'ford'
  };
};
console.log(minhaFuncao());
console.log(retornaUmCarro());

//Escopo de funcao das arrows functions
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    this.velocidadeAtual += 10; //incrementando 10km a velocidade atual
  },
  frear: function frear() {
    _this.velocidadeAtual -= 10; //decrementando 10km a velocidade at
  }
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);