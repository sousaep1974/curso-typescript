// CONFIGURADO (tsconfig.json) E TESTADO - Erros no código impedirá a compilação.
let canal: string = "Gaveta";
let inscritos: number = 600234;
/* canal = inscritos */
console.log(canal);

/* let nome = 'João'
console.log(nome); */

/* Implicit Any: caso não seja atribuido um 
tipo vai gerar um erro
 e ficará implicito o tipo any. */

function soma(a:any, b:any) {
  return a + b;
}

// Any implícito, e não gera aviso.

let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = "abc";

function saudar(isManha: boolean):string{
  let saudacao: string
  if (isManha) {
    saudacao = 'Bom dia'
  } else {
    saudacao = 'Tenha uma boa vida'    
  }
  return saudacao
}

