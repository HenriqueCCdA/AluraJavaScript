const livros = require('./listaLivros')

function insertionSort(lista){

    for(let atual = 1; atual < lista.length; atual++){
        let analise = atual
        while (lista[analise].preco < lista[analise - 1].preco){
            let itemAnalise = lista[analise]
            let itemAnterior = livros[analise - 1]

            lista[analise] = itemAnterior
            lista[analise - 1] = itemAnalise

            analise--
        }
    }
    console.log(lista)
}

insertionSort(livros)
