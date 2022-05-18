"use strict";
// Como no TS os tipos são inferidos mesmo que não estejam explícitos, não é permitido mudar de string para number.
//Strings
let nome = "João";
console.log(`${nome} é do tipo:`, typeof nome);
//nome = 28; // error de tipo
//Numbers
let idade = 27;
//idade = "Ana"; // error de tipo
idade = 27.5;
console.log(`${idade} é do tipo:`, typeof idade);
//Boolean
let temHobby = false;
//temHobby = 1; // error de tipo
temHobby = true;
console.log(`${temHobby} é do tipo:`, typeof temHobby);
// Tipos explícitos
let minhaIdade;
minhaIdade = 27;
console.log(`${minhaIdade} é do tipo:`, typeof minhaIdade);
// array
let hobbies = ["cozinhar", "Praticar esporte"];
hobbies = [100];
console.log(hobbies);
console.log(typeof hobbies);
//Tuplas -- misturas de tipos
let endereco = ["Av. Paulista", 99, "Sala 4"];
console.log(endereco);
endereco = ["Av. Brasil", 30, "Bloco A"];
console.log(typeof endereco[0]);
console.log(typeof endereco[1]);
console.log(typeofendereco[2]);
