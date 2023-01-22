//Classe abstrata
export class Conta{
    constructor(saldoInicial, cliente , agencia){
        if(this.constructor == Conta){
            throw new Error("Não pode instaciar uma Conta pois é uma classe abstrata");
        }
        this._saldo = saldoInicial;
        this._agencia = agencia;
        this._Cliente = cliente;
        
    }

    set cliente(cliente){
        if(cliente instanceof Cliente){
            this._Cliente = cliente;
        }
   
    }

    get cliente(){
        return this._Cliente;
    }

    get saldo(){
        return this._saldo;
    }
    //metodo abstrato
    sacar (value){
        throw new Error("O metodo sacar é abstrato");
    }   

    _sacar(value, taxa){
        const valorSacado = taxa * value;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

    depositar(value){
        if(value <= 0){
            return;            
        }   
        this._saldo += value;    
    }
    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}