import { Prisma } from '@prisma/client';

export class Medico implements Prisma.MedicoCreateInput {
  observacoes: string;
  id: number;
  nome: string;
  cpf: string;
  crm: string;
  especialidade: string;
  dataNascimento: Date;
  consultas?: Prisma.ConsultaCreateNestedManyWithoutMedicoInput; // Relação com consultas
}
