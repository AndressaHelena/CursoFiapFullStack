var nameUser = 'Andressa';
var idade = 37;
var statusPosicao = 1;
if (idade <= 2) {
    console.log("Bebê");
}
else if (idade <= 11) {
    console.log("Criança");
}
else if (idade <= 19) {
    console.log("Adolescente");
}
else if (idade <= 59) {
    console.log("Adulto");
}
else {
    console.log("Idoso");
}
if (statusPosicao == 1) {
    console.log("Usuário");
}
else if (statusPosicao == 2) {
    console.log("Empresa");
}
else if (statusPosicao == 3) {
    console.log("Adm");
}
console.log("Hello World! ".concat(nameUser));
