// Como no TS os tipos são inferidos mesmo que não estejam explícitos, não é permitido mudar de string para number.
//Strings
let nome = "João";
console.log(nome, "é do tipo:", typeof nome);
//nome = 28; // error de tipo

//Numbers
let idade = 27;
//idade = "Ana"; // error de tipo
idade = 27.5;
console.log(idade, "é do tipo:", typeof idade);

//Boolean
let temHobby = false;
//temHobby = 1; // error de tipo
temHobby = true;
console.log(temHobby, "é do tipo:", typeof temHobby);

// Tipos explícitos
let minhaIdade: number = 20;
// minhaIdade = "27"; //Seria permitido se tivesse explícito
minhaIdade = 27;
console.log(minhaIdade, "é do tipo:", typeof minhaIdade);

// array
let hobbies: any[] = ["cozinhar", "Praticar esporte", 100, false];
hobbies = [100];
console.log(hobbies, "é do tipo:", typeof hobbies);

//Tuplas -- misturas de tipos
let endereco: [string, number, string] = ["Av. Paulista", 99, "Sala 4"];
console.log(endereco);
endereco = ["Av. Brasil", 30, "Bloco A"];
console.log(typeof endereco[0]);
console.log(typeof endereco[1]);
console.log(typeof endereco[2]);

//Enuns
enum Cor {
  Cinza = 101,
  Verde = 99,
  Azul = 1,
  Laranja = 0,
  Amarelo = 15,
  Vermelho = 45,
}
console.log(Cor.Cinza, "é do tipo:", typeof Cor);
console.log(Cor.Verde, "é do tipo:", typeof Cor.Verde);
console.log(Cor.Azul, "é do tipo:", typeof Cor.Azul);
console.log(Cor.Laranja, "é do tipo:", typeof Cor.Laranja);
console.log(Cor.Amarelo, "é do tipo:", typeof Cor.Amarelo);
console.log(Cor.Vermelho, "é do tipo:", typeof Cor.Vermelho);

// Any
let car: any = "BMW";
console.log(car);
car = { marca: "BMW", ano: 2019 };
console.log(car);

//Função
function retornaNome(): string {
  //return minhaIdade;
  return nome;
}
console.log(retornaNome());

function digaOi(): void {
  console.log("Oi, Galera!");
}
digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}
//console.log(multiplicar(3, 'Edivan')); //Erro de tipo
console.log(multiplicar(3, 3)); // result 9

// Tipo função
let calculo: (x: number, y: number) => number;
//calculo = digaOi
//calculo()
calculo = multiplicar;
console.log(calculo(5, 6));

//Objeto
let usuario: { nome: string; idade: number } = {
  nome: "João",
  idade: 27,
};
console.log(usuario);

usuario = {
  nome: "Maria",
  idade: 45,
};

console.log(usuario);

// Desafio objeto

let funcionarioA: {
  supervisores: string[];
  baterPonto: (horas: number) => string;
} = {
  supervisores: ["Ana", "Fernando"],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return "Ponto normal";
    } else {
      return "Fora do horário";
    }
  },
};
// Duplicação
let funcionarioB: {
  supervisores: string[];
  baterPonto: (horas: number) => string;
} = {
  supervisores: ["Ana", "Fernando"],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return "Ponto normal";
    } else {
      return "Fora do horário";
    }
  },
};
console.log(funcionarioA.supervisores);
console.log(funcionarioA.baterPonto(8));
console.log(funcionarioB.baterPonto(9));

/* funcionario = {} */ //Erro

// TIPOS PERSONALIZADOS (para não duplicar)

//Alias
type Funcionario = {
  supervisores: string[];
  baterPonto: (horas: number) => string;
};

// Funcionário1 carrega o tipo já definido
let funcionario1: Funcionario = {
  supervisores: ["Ana", "Fernando"],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return "Ponto normal";
    } else {
      return "Fora do horário";
    }
  },
};

// Funcionário2 carrega o tipo já definido
let funcionario2: Funcionario = {
  supervisores: ["Ana", "Fernando"],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return "Ponto normal";
    } else {
      return "Fora do horário";
    }
  },
};

//UNION TYPES

let nota: number | string = 10;
console.log(`Minha nota é ${nota}`);

nota = "10"; // permitido
console.log(`Minha nota é ${nota}`);

/* nota = true */ // Tipo indesejado

// CHECANDO OS TIPOS

let valor = 30;
if (typeof valor === "number") {
  console.log("É um valor number");
} else {
  console.log(typeof valor);
}

// NEVER - NUNCA HAVERÁ UM RETORNO, APESAR DE SER EXECUTADA
function falha(msg: string): never {
  throw new Error(msg);
}

const produto = {
  nome: "Sabão",
  preco: 1,
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0) {
      falha("Precisar ter um nome");
    }
    if (this.preco <= 0) {
      falha("Preço inválido!");
    }
  },
};
produto.validarProduto();

// VALORES OPCIONAIS COM (null)
// Não será permitido reatribuir valor de variáveis como (null),
// se não colocar ele como opção de tipo.

let altura = 12;
//altura = null; // ERRO

let alturaOpcional: number | null = 12;
alturaOpcional = null; // Não ERRO

type Contato = {
  nome: string;
  tel1: string;
  tel2: string | null;
};

const contato1: Contato = {
  nome: "Fulano",
  tel1: "98649746",
  tel2: null,
};

console.log(contato1.nome); // Fulano
console.log(contato1.tel1); // 98649746
console.log(contato1.tel2); // null

// Quando atribui valor nulo para uma variavel ele será do tipo any.
let podeSerNulo = null // será do tipo any
console.log(typeof podeSerNulo); // object (any)

podeSerNulo = 12, // aceito
console.log(typeof podeSerNulo); // number

podeSerNulo = "Fulano" // aceito
console.log(typeof podeSerNulo); // string


let seraNulo: null = null // agora sim, será do tipo null

// DESAFIO DO FINAL SOBRE TIPOS - ATRIBUIR TIPOS
type contaBancaria = {
  saldo: number,
  depositar: (valor: number) => void
}
let contaBanDeCliente: contaBancaria = {
 saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor
  }
}

type correntista = {
  nome: string, 
  contaBanDeCliente: contaBancaria ,
  contatos: string[],

 }

let correntistaCliente1: correntista = {
  nome: 'Ana Silva',
  contaBanDeCliente: contaBanDeCliente,
  contatos: ['33265478', '789654848'],
}

correntistaCliente1.contaBanDeCliente.depositar(3000)
console.log(correntistaCliente1);









