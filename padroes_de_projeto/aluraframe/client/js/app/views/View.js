class View{

    constructor(elemento) {
        this._elemento = elemento;
    }

    templates(){
        throw new Error('O método template precisa ser implementado');
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }

}