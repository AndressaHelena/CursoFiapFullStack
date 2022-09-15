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

console.log("___________________________");


const yearFactory = new Date().getFullYear();

for(let x:number = yearFactory; x >= 1920; x-=10){
  if(x >= 1990 && x < 2000){
    continue;
  }
  console.log(x);

//operadores incrementais e decrementais
// x++ x = x + 1 - incremento
// ++x x = x + 1 - pré-incremento
// x-- x = x - 1 - decremento
// --x x = x - 1 - pré-decremento
  
}
let num = 2;
for(let tabuada:number = 0; tabuada <= 10; tabuada++){
  
  if( tabuada > 2 && tabuada < 10){
    if(tabuada % 2 == 1 && tabuada > 3){
      console.log(".");
      
    }
    continue;
  }
  console.log(`${num} x ${tabuada} = ${num*tabuada}`);
  
}