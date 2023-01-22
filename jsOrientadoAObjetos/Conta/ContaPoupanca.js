import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente , agencia){
        super(saldoInicial, cliente, agencia);
    }

    sacar(value){
        const taxa = 1.02;
        return super._sacar(value , taxa);
    }
}