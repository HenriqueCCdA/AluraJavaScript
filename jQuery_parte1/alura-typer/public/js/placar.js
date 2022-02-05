$("#botao-placar").click(mostraPlacar);
$("#botao-sync").click(sincronizaPlacar);

function inserePlacar(){
    let corpoTabela = $(".placar").find("tbody");
    let usuario = $("#usuarios").val();
    let numPalavras = $("#contador-palavras").text();

    let linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);
    corpoTabela.append(linha);
    $(".placar").slideDown(500);
    scrollPlacar()

}

function scrollPlacar(){
    let posicaoPlacar = $(".placar").offset().top;
    console.log(posicaoPlacar);
    $("html").animate({scrollTop: posicaoPlacar + "px"}, 1000);
}


function novaLinha(usuario, numPalavras){
    let linha = $("<tr>");
    let colunaUsuario = $("<td>").text(usuario);
    let colunaPalavras = $("<td>").text(numPalavras);
    let colunaRemover = $("<td>");

    let link = $("<a>").addClass("botao-remover").attr("href", "#");
    let icone =  $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha
}


function removeLinha(){
    event.preventDefault();
    let linha = $(this).parent().parent();
    linha.fadeOut(600);
    setTimeout(function(){
        linha.remove()
    }, 800)
}

function mostraPlacar(){
    $(".placar").stop().slideToggle(600);
}

function sincronizaPlacar(){
    let placar = [];
    let linhas = $("tbody>tr");

    linhas.each( function(){
        let usuario = $(this).find("td:nth-child(1)").text();
        let palavras = $(this).find("td:nth-child(2)").text();

        let score = {
            usuario: usuario,
            pontos: palavras
        };

        placar.push(score);
    });

    let dados = {
        placar: placar
    };

    $.post("http://localhost:3000/placar", dados, function(){
        console.log("Salvou o placar no servidor");
        $(".tooltip").tooltipster("open");
    })
    .fail(function(){
        $(".tooltip").tooltipster("open").tooltipster("content", "Falha ao sincronizar");
    })
    .always(function(){
        setTimeout( function(){
            $(".tooltip").tooltipster("close");
        }, 1200);
    })
}

function atualizaPlacar(){
    $.get("http://localhost:3000/placar", function(data){
        $(data).each(function(){
            let linha = novaLinha(this.usuario, this.ponto);
            linha.find(".botao-remover").click(removeLinha);
            $("tbody").append(linha)
        });
    });

}