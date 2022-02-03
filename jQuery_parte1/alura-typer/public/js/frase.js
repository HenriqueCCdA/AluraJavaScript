$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase)

function fraseAleatoria(){
     $("#spinner").show();

     $.get("http://localhost:3000/frases", trocaFraseAleatoria)
     .fail(function(){
          $("#erro").show();
          setTimeout(function (){
               $("#erro").toggle();
          }, 2000);

     })
     .always(function(){
          $("#spinner").toggle();
     });
};

function trocaFraseAleatoria(data){
     let frase = $(".frase");
     let numeroAleatorio = Math.floor(Math.random() * data.length);
     frase.text(data[numeroAleatorio].texto);

     atualizaTamanhoFrase();
     atualizaTempoInicial(data[numeroAleatorio].tempo);
}

function buscaFrase(){
     $("#spinner").toggle();
     let fraseId = $("#frase-id").val();
     console.log(fraseId);
     let dados = { id: fraseId};

     $.get("http://localhost:3000/frases", dados, trocaFrase)
     .fail(function(){
          $("#erro").show();
          setTimeout(function (){
               $("#erro").toggle();
          }, 2000);

     })
     .always(function(){
          $("#spinner").toggle();
     });
}

function trocaFrase(data){
     let frase = $(".frase");
     frase.text(data.texto);
     atualizaTamanhoFrase();
     atualizaTempoInicial(data.tempo);
}