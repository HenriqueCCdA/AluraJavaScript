class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacaoView($('#negociacoesView')),
            'adiciona', 'esvazia');

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto');

    }

    adiciona(event){
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._mensagem.texto = 'Negociação adicionada co sucesso'

        this._limpaFormulario();
    }

    importaNegociacoes(){

        let service = new NegociacaoService();

        Promise.all([service.obterNegociacoesDaSemana(),
                    service.obterNegociacoesDaSemanaAnterior(),
                    service.obterNegociacoesDaSemanaRetrasada()]
        ).then(negociacoes => {
            negociacoes
                .reduce((arrayAchatado, arry) => arrayAchatado.concat(arry),[])
                .forEach(negocicao => this._listaNegociacoes.adiciona(negocicao));
            this._mensagem.texto = 'Negociação da semana obtida com sucesso'
        })
        .catch(error => this._mensagem.texto = error);
/*
        service.obterNegociacoesDaSemana()
            .then( negociacoes => {
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
                this._mensagem.texto = 'Negociação da semana obtida com sucesso';
           })
            .catch(erro => this._mensagem.texto = erro);

        service.obterNegociacoesDaSemanaAnterior()
           .then( negociacoes => {
               negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
               this._mensagem.texto = 'Negociação da semana anterior obtida com sucesso';
          })
          .catch(erro => this._mensagem.texto = erro);

        service.obterNegociacoesDaSemanaRetrasada()
          .then( negociacoes => {
              negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
              this._mensagem.texto = 'Negociação da semana retrasa obtida com sucesso';
         })
          .catch(erro => this._mensagem.texto = erro);
*/
    }

    apaga(envent){
        this._listaNegociacoes.esvazia();

        this._mensagem.texto = 'Negociacoes apagadas com sucesso';

    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

}