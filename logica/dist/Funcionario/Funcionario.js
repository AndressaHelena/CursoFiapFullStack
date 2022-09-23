"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("../Pessoa"));
class Funcionario extends Pessoa_1.default {
    ri;
    cpf;
    _salario = 0;
    isAdmin = true;
    constructor(parametroNome, parametroIdade, parametroRi, parametroCpf, parametroSalario) {
        super(parametroNome, parametroIdade);
        this.ri = parametroRi;
        this.cpf = parametroCpf;
        this.salario = parametroSalario;
        console.log(`Funcionário ${this.nome} cadastrado com sucesso! Ganha ${this.salario}`);
    }
    get salario() {
        return (this.isAdmin) ? this._salario : 0;
    }
    set salario(value) {
        if (value < 1200) {
            this._salario = 1200;
        }
        else {
            this._salario = value;
        }
    }
}
exports.default = Funcionario;
const avanade = new Funcionario('Andressa', 30, '123123', '123.123.123-00', 1000);
console.log(avanade.nome);
