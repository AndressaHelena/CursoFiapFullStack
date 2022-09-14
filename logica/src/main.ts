const nameUser: string = 'Andressa';
const idade: number = 37;
const statusUser: number = 1;

if(idade <= 2){
    console.log("Bebê");    
} else if (idade <= 11){
    console.log("Criança");
} else if (idade <= 19){
    console.log("Adolescente");
} else if (idade <= 59){
    console.log("Adulto");
}else{
    console.log("Idoso");
}


switch (statusUser) {
    case 1:
      console.log("Usuário");
      break;
    case 2:
    case 4:
      console.log("Empresa");
      break;
    case 3:
      console.log("Admin");
      break;
    default:
      console.log("Status inválido");
  }
  


console.log(`Hello World! ${nameUser}`);