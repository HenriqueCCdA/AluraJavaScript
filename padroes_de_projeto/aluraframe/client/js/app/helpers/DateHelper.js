class DateHelper {

    constructor(){
        throw new Error('Esta classe não pode ser instanciada')
    }

    static textoParaData(texto){
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    static dataPataTexto(data){
       return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
    }
}