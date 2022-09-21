import Pessoa from "../Pessoa";

class Funcionario extends Pessoa{

    ri:string;
    cpf:string;

    constructor(parametroNome: string, parametroIdade: number, parametroRi: string, parametroCpf: string){
        super(parametroNome, parametroIdade)
        this.ri = parametroRi;
        this.cpf = parametroCpf;
        
    }
    cadFuncionario(){
        console.log(`Funcionário ${this.nome} cadastrado com sucesso!`);
    }
}

export default Funcionario
