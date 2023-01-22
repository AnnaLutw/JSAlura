
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Cliente } from "./Cliente.js";

const diretor = new Diretor("Ana", 10000, 223344556677);
const gerente = new Gerente("Julia", 5000, 445566778899);
diretor.cadastraSenha("123456");
gerente.cadastraSenha("1234")

const diretorLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteLogado = SistemaAutenticacao.login(gerente, "1234");

const cliente = new Cliente("Joana", 234567896, "5432");
const clienteLogado = SistemaAutenticacao.login(cliente, "5432");


console.log(gerenteLogado);
console.log(clienteLogado);
