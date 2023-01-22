import { Conta } from "./Conta.js";

class ContaSalario extends Conta{
    constructor(cliente){
        super(0, cliente, 100)
    }

    sacar(value){
        const taxa = 1.01;
        return this._sacar(value, taxa);
    }
}