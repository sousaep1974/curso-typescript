import Livro from "./modelo/livro";
import $ from "jquery";


const livro = new Livro ("Dom Quixote", 108.8, 0.1);

/* console.log(livro.precoComDesconto()); */

$("body").append(`<h1>${livro.nome}</h1>`);

$("body").append(`<h2>Preço:R$${livro.precoComDesconto()}</h2>`);
