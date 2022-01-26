var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    let alvoEvento = event.target;
    let paiDoAlvo = alvoEvento.parentNode;
    paiDoAlvo.remove();
});

// lista_pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         this.remove()
//     });
// });