//Rest operator - utilizado como um argumento de uma função
function somar(a, b) {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }

    return soma;
    // console.log(arguments) // dicionario - retorna uma estrutura como se fosse um objeto;
    // o argumens é iterável(conseguimos fazer o for), porem nao é um array
    // return a + b;
}

console.log(somar(10, 20, 30));

//Entendendo como funciona o rest 
function somarComRest(...numeros) {  // os (...) permite passar inumeros argumentos da funcao
    const soma = numeros.reduce((total, numeroAtual) =>{
        total += numeroAtual;
        return total;
    },0)
    return soma; 
}

console.log(somarComRest(10, 20, 30));


//Spread operator - conseguimos espalhar os itens de um array 
//utiliza pra fazer concatenações,console.log, preenchimento de objetos  
const numeros = [1,2,3,4]
console.log(...numeros)

const timesDeFutebolBahia = ['vitoria', 'bahia', 'crb', 'bahia de feira'];
const timeDeFutebolRio = ['flamengo', 'fluminense', 'vasco', 'botafogo'];

// const timesDeFutebol = timesDeFutebolBahia.concat(timeDeFutebolRio);
const timesDeFutebol = [...timesDeFutebolBahia, ...timeDeFutebolRio]

// timesDeFutebolBahia.concat(timesDeFutebolRio);
console.log(timesDeFutebol);

//utilizando o spread para espalhar objetos
const carroDoCezar = {
    modelo: 'Gol',
    Marca: 'VW',
    Ano: 2021
}

const corroDaPaula = {
    ...carroDoCezar,  //copiou todo o conteudo q se repete e subscreve o atributo q se difere
    Ano: 2024
}

console.log(carroDoCezar);


//desestruturação
// const AnoCarroDoCezar = carroDoCezar.Ano;

// const { ano } = carroDoCezar; //acessando propriedades dentro do objeto
const { Ano: anoCarroDoCezar } = carroDoCezar;
const { Ano: anoCarroDaPaula } = corroDaPaula;

console.log(anoCarroDoCezar);
console.log(anoCarroDaPaula);

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);