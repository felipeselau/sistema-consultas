import { $Enums, Especialidade, Prisma } from '@prisma/client';

export class Consulta implements Prisma.ConsultaCreateInput {
  status: $Enums.Status;
  id: number;
  data: Date;
  observacoes: string;
  especialidade: Especialidade;
  medico: Prisma.MedicoCreateNestedOneWithoutConsultasInput; // Relação com Medico
  paciente: Prisma.PacienteCreateNestedOneWithoutConsultasInput; // Relação com Paciente
  funcionario: Prisma.FuncionarioCreateNestedOneWithoutConsultaInput;
}
