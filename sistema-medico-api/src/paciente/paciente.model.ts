import { Prisma } from "@prisma/client";

export class Paciente implements Prisma.PacienteCreateInput {
  observacoes: string;
  id: number;
  nome: string;
  cpf: string;
  dataNascimento: Date;
  endereco: string;
  consultas?: Prisma.ConsultaCreateNestedManyWithoutPacienteInput; // Relação com consultas
}
