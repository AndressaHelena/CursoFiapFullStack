"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function escreveConsole() {
    console.log("Vai Corinthians!");
}
function escreve() {
    return (" Corinthians");
}
escreveConsole();
console.log(`O melhor time do mundo é o${escreve()}!`);
const empresa = "Anavade";
console.log(empresa.toUpperCase(), empresa.toLocaleLowerCase(), empresa.length);
const locale = 'pt-br';
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
};
console.log(new Date().toLocaleDateString(locale, options));
const user = {
    firstName: 'João',
    age: 25,
    email: 'joao@gmail.com',
    address: {
        street: 'Rua ABC',
        number: 1000,
        city: 'São Paulo',
        state: 'SP',
    },
    cpf: "123.456.789-00"
};
