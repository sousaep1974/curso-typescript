"use strict";
// SINTAX BÁSICA
class Data {
    constructor(dia = 1, mes = 1, ano = 1974) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data(); // Posso omitir os "()" casa não haja parâmentros
casamento.ano = 2017;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1974) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta(); // Posso omitir os "()" casa não haja parâmentros
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
// Desafio Classe Produto
// Atributos: nome, preco e desconto
// Criar o  constructor
// Obs 1: Desconto é opcional
// Obs 2: Criar dois produtos: passando dois ou três parâmentros
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    // Criar Método precoComDesconto
    // Quais Parâmetros e o Retorno?
    // Alterar método resumo para mostrar o preço com desconto
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resume() {
        return `${this.nome}, custa R$${this.precoComDesconto().toFixed(2)} com (${this.desconto * 100}% off)`;
    }
}
const smartPhone = new Produto("Sansung SW2145", 4582.5);
smartPhone.desconto = 0.06;
console.log(smartPhone.resume());
const noteBook = new Produto("Dell Slim", 7589.99, 0.05);
console.log(noteBook.resume());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro("Ford", "Kar", 185);
Array(50)
    .fill(0)
    .forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
Array(36)
    .fill(0)
    .forEach(() => carro1.frear());
console.log(carro1.frear());
// Simular possíveis erros gerados no TS, mas que passam após compilado no JS
// velocidadeAtual embora privado, compilado para JS funciona normalmente.
// Uma das alternativas é configurar o "noEmitOnError" como "true" no arquivo tsconfig.json
// evitando que o erro seja compilado
/* carro1.velocidadeAtual = 300;
console.log('Atual -> ' + carro1.velocidadeAtual);

carro1.velocidadeMaxima = 500 //
console.log('Máxima -> ' + carro1.velocidadeMaxima);

carro1.alterarVelocidade(100)
console.log('Atual -> ' + carro1.velocidadeAtual); */
// HERANÇA
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super("Ferrari", modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari("F40", 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
// Getters e Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -3;
console.log(pessoa1.idade);
// ATRIBUTOS E MÉTODO ESTÁTICOS
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
console.log(Matematica.areaCirc(4));
