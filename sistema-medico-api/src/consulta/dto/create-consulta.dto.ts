import { $Enums } from "@prisma/client";
import { IsDate, IsEnum, IsNotEmpty, isDateString } from "class-validator";

export class CreateConsultaDTO {
  @IsDate()
  @IsNotEmpty()
  horario: Date;

  @IsNotEmpty()
  @IsEnum($Enums.Status)
  status: $Enums.Status;

  @IsNotEmpty()
  @IsEnum($Enums.Especialidade)
  especialidade: $Enums.Especialidade;

  @IsNotEmpty()
  observacoes: string;

  @IsNotEmpty()
  medicoId: number;

  @IsNotEmpty()
  pacienteId: number;
}