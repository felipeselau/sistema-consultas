import { Cargo, Prisma } from "@prisma/client";

export class Funcionario implements Prisma.FuncionarioCreateInput {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    dataAdmissao: Date;
    endereco: string;
    cargo: Cargo;
}