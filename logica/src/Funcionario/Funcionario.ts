import Pessoa from "../Pessoa";

class Funcionario extends Pessoa{

    ri: string;
    cpf: string;
    private _salario: number = 0;
    isAdmin: boolean = true;

    constructor(parametroNome: string, parametroIdade: number, parametroRi: string, parametroCpf:string,parametroSalario: number){
        super(parametroNome, parametroIdade);
        this.ri = parametroRi;
        this.cpf = parametroCpf;
        this.salario = parametroSalario;
        console.log(`Funcionário ${this.nome} cadastrado com sucesso! Ganha ${this.salario}`);
    }

    get salario(){
        return (this.isAdmin)?this._salario:0;
    }

    set salario(value:number){
        if(value < 1200){
            this._salario = 1200;
        }else {
            this._salario = value;
        }
    }
}

export default Funcionario

const avanade = new Funcionario('Andressa', 30, '123123','123.123.123-00', 1000);
console.log(avanade.nome);
