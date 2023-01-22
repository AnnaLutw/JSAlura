//Ser altenticavel significa ter um metodo autenticar

export class SistemaAutenticacao {

    //metodo statico
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutetnticavel(autenticavel)){
            return autenticavel.autenticar(senha);

        }
        return false;
    }

    static ehAutetnticavel(autenticavel){
        //verificando no endereço de memoria do js se essas chave alenticar existe dentro do objeo autenticavel
        return "autenticar" in autenticavel && 
            autenticavel.autenticar instanceof Function
    }
}