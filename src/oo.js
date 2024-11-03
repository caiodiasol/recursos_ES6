//exeplo de função construtora antes do ES6+

// function Pokemon (nomeDoPokemon, tipoDoPokemon) {
//     this.nome = nomeDoPokemon;
//     this.tipo = tipoDoPokemon;
// }

// const pikachu = new Pokemon('Pikachu', 'Elétrico');

//***função construtora COM O ES6+*******

class Pokemon {
    #hp = 100; // o # permite recurso de campo privado

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque){
        console.log(`${this.nome} atacou com ${nomeDoAtaque} `);
    }
    
    recebeuAtaque(){
        this.#hp -= 10;
    }

    exibeHp(){
        console.log(this.#hp);
    }
}


//Herança com EC6+
class Pikachu extends Pokemon {
    constructor(){
        super('Pikachu', 'Eletrico');
    }
//Exemplo de polimorfismo
    atacar(){
        console.log(`${this.nome} atacou com choque do trovao`);
    }
}

const pikachuDoAsh = new Pikachu();

pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.hp = 5000;

console.log(pikachuDoAsh.hp)

pikachuDoAsh.atacar();

pikachuDoAsh.exibeHp();

const pikachu = new Pokemon('Pikachu', 'Elétrico');
// pikachu.atacar('choque do trovao');

console.log(pikachu);
console.log(pikachuDoAsh);

console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);