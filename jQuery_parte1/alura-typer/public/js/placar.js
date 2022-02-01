$("#botao-placar").click(mostraPlacar);

function inserePlacar(){
    let corpoTabela = $(".placar").find("tbody");
    let usuario = "Henrique";
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