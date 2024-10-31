"use strict";

// A B C D = programação sincrona 

// A B
// C D = programação assincrona

function funcaoMuitoPesada() {
  var execucoes = 0;
  for (var i = 0; i < 1000000000; i++) {
    execucoes++;
  }
  return execucoes;
}
console.log('inicio');
console.log(funcaoMuitoPesada());
console.log('fim');