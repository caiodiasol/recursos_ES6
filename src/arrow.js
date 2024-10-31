//Arrow Function - Torna o retorno direto, simplificando o return
const minhaFuncao = () => 'diz ola arrow'

//retornando um objeto
const retornaUmCarro = () => ({
        modelo: 'ka',
        fabricante: 'ford'
})

console.log(minhaFuncao());
console.log(retornaUmCarro());

//Escopo de funcao das arrows functions
const carro = {
    velocidadeAtual: 40,
    acelerar: function () {
        this.velocidadeAtual += 10; //incrementando 10km a velocidade atual
    },
    frear: () => {
        this.velocidadeAtual -= 10; //decrementando 10km a velocidade at
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual);

