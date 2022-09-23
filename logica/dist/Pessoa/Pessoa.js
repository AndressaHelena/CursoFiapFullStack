"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    //atributo
    nome;
    idade;
    //método
    constructor(parametroNome, parametroIdade) {
        this.nome = parametroNome;
        this.idade = parametroIdade;
        console.log(`A pessoa ${this.nome} de idade ${this.idade} esta andando`);
    }
}
exports.default = Pessoa;
