//Map é uma estrututa sicionario (conjunto de valore)
let meuMap = new Map();

//adicionando um item (SET) - recupera toda a estrutura 
meuMap.set("nome", "Caio"); 
meuMap.set("stack", "html, css, js"); 

console.log(meuMap);

// recuperacao de um item (GET) de uma determinada chave
const nome = meuMap.get("nome");

console.log(nome);

//recuperando a quantidades de item dentro de uma estrutura
console.log (meuMap.size);

//verificando se determinada chave existe dentro de um map
console.log(meuMap.has("nome"));

//faz a limpeza do map, removendo todos os itens
// meuMap.clear()
console.log(meuMap.size);

//Fazendo uma iteração com map (recupera nome das chaves)
for ( let chave of meuMap.keys()) {
    console.log(chave);
}

//Fazendo uma iteração com map (recupera valores das chaves)
for ( let valor of meuMap.values()) {
    console.log(valor);
}

// visao de tabela
for ( let entrada of meuMap.entries()) {
    console.log(entrada);
}

for(let [chave, valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`);
}

//removendo um item dentro de um map
meuMap.delete("stack");
console.log(meuMap);


//Set - estrutura mais rigida, os valores nao se repetem.
const cpfs = new Set();

//adicionando um item denttro de um set
cpfs.add('66953790083')
cpfs.add('56773790084')
cpfs.add('66953790085')

console.log(cpfs);

console.log(cpfs.keys());
console.log(cpfs.values());


//iterando com o forEach
cpfs.forEach((valor) => {
    console.log(valor)
})

//criando uma listagem de itens unicos , removendo item duplicados de um array
const array = ['Carlos Souza' , 'Jose Paulo' ,'Maria Izabel' , 'Maria Izabel' , 'Carlos Souza']

const arraySemItensDuplicados = [...array]
console.log(arraySemItensDuplicados)

const arrayComoSet = new Set([...array]);
console.log(arrayComoSet);
