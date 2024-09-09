import { Prisma } from "@prisma/client";
import { Cargo } from "src/utils/types";

export class Funcionario implements Prisma.FuncionarioCreateInput {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    dataAdmissao: Date;
    endereco: string;
    cargo: Cargo;
}
