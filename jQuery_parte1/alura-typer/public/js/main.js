let tempoIncial = $("#tempo-digitacao").text();
let campo = $(".campo-digitacao");

$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
    atualizaPlacar();
    $("#usuarios").selectize({
        create: true,
        sortField: 'text'
    });

});

function atualizaTempoInicial(tempo){
    tempoIncial = tempo;
    $("#tempo-digitacao").text(tempo);
}

function atualizaTamanhoFrase(){
    let frase = $(".frase").text();
    let numeroDePalavras = frase.split(" ").length;
    let tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numeroDePalavras);
}

function inicializaContadores(){
    campo.on("input", function(){
        let conteudo = campo.val();

        let qtdPalavras = conteudo.split(/\s+/).length - 1;
        $("#contador-palavras").text(qtdPalavras);

        let qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);

    });
}

function inicializaMarcadores(){
    campo.on("input", function(){
        let frase = $(".frase").text();
        let digitado = campo.val();
        let comparavel = frase.substr(0, digitado.length);
        if( digitado == comparavel){
            console.log('Certo');
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        }else{
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }

    });
}

function inicializaCronometro(){
    campo.one("focus", function(){
        let tempoRestante = $("#tempo-digitacao").text();
        let cronametroId = setInterval(
            function(){
                tempoRestante--;
                $("#tempo-digitacao").text(tempoRestante);
                if(tempoRestante < 1){
                    clearInterval(cronametroId);
                    finalizaJogo();
                }
            }, 1000);
    });
}

function finalizaJogo(){
    campo.attr("disabled", true);
    campo.toggleClass("campo-desativado");
    inserePlacar();
}


function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val('');

    $("#contador-palavras").text(0);
    $("#contador-caracteres").text(0);
    $("#tempo-digitacao").text(tempoIncial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");
}