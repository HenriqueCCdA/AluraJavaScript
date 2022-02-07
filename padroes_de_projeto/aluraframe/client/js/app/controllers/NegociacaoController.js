class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

    }

    adiciona(event){

        event.preventDefault();

        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )

        console.log(negociacao);


        let diaMesAno = DateHelper.dataPataTexto(negociacao.data);

        console.log(diaMesAno);
        // adicionar a negocai em um lista
    }

}