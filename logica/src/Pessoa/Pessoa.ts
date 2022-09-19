class Pessoa {
    //atributo
    nome:string;
    idade: number;

    //método
    constructor(parametroNome: string, parametroIdade: number){
        this.nome = parametroNome;
        this.idade = parametroIdade;
        console.log(`A pessoa ${this.nome} de idade ${this.idade} esta andando`);
    }
}

export default Pessoa;
