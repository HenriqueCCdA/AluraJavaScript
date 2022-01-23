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

    let pesoEhValido = validaPeso(peso);
    let alturaEhValido = validaAltura(altura);

    if(!pesoEhValido){
        console.log('Peso inválido');
        pesoEhValido = false;
        tdImc.textContent = 'Peso inválido';

        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValido){
        console.log('Altura inválida');
        alturaEhValido = false;
        tdImc.textContent = 'Altura inválida';

        paciente.classList.add("paciente-invalido");
    }


    if( pesoEhValido && alturaEhValido){
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    let imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){

    if(peso >= 0.0 && peso < 1000){
        return true;
    }
    return false;
}

function validaAltura(altura){

    if(altura >= 0.0 && altura <= 3.0){
        return true;
    }
    return false;
}