import { $Enums } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { CreateUserDTO } from "src/user/dto/create-user.dto";

export class CreateMedicoDTO extends CreateUserDTO {

  @IsString()
  @IsNotEmpty()
  crm: string;

  @IsEnum($Enums.Especialidade)
  @IsNotEmpty()
  especialidade: $Enums.Especialidade;
  
}