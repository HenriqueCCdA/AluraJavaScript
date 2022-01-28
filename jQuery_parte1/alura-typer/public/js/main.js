let frase = $(".frase").text();
let numeroDePalavras = frase.split(" ").length;
let tamanhoFrase = $("#tamanho-frase");

tamanhoFrase.text(numeroDePalavras);