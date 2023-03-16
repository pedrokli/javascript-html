console.log("Hellow World");

function pula_linha() {

    document.write("<br>");

}

function mostrar(frase) {

    document.write(frase);
    pula_linha();

}

function calcula_imc(peso, altura) {

return peso / (altura * altura);

}

var nome = prompt("Insira o seu nome:");
var altura_informada = prompt( nome + ", informe a sua altura:");
var peso_informado = prompt(nome + ", informe o seu peso:");

var imc = calcula_imc(peso_informado, altura_informada);

mostrar(nome + ", seu imc é " + imc);