class ProxyFactory{
    static create(objeto, props, acao) {

        return new Proxy(objeto, {

            get(target, prop, receiver){
                if(props.includes(prop) && ProxyFactory._ehFuncao(target[prop])){
                    return function(){
                        console.log(`interceptando no get ${prop}`);
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }
                }
                return Reflect.get(target, prop, receiver);
            },

            set(target, prop, value, receiver){
                console.log("interceptando o set");

                if(props.includes(prop)){
                    console.log(`interceptando no set ${prop}`);
                    target[prop] = value;
                    acao(target);
                }
                return Reflect.set(target, prop, value, receiver);
            }
        });

    }

    static _ehFuncao(func){
        return typeof(func) == 'function'
    }
}