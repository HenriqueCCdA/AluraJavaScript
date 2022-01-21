let titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");

    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc");


    let pesoEhValido = true;
    let alturaEhValido = true;

    if(peso <= 0.0 || peso >= 1000){
        console.log('Peso inválido');
        pesoEhValido = false;
        tdImc.textContent = 'Peso inválido';

        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0.0 || altura >= 3.0){
        console.log('Altura inválida');
        alturaEhValido = false;
        tdImc.textContent = 'Altura inválida';

        paciente.classList.add("paciente-invalido");
    }

    if( pesoEhValido && alturaEhValido){
        let imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

let botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener("click", () => {
    console.log("Oi, cliquei no bot")
})