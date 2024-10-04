import { IsBoolean, IsDateString, IsNotEmpty, IsString } from "class-validator";

export abstract class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  cpf: string

  @IsDateString()
  @IsNotEmpty()
  dataNascimento: Date;

  @IsString()
  @IsNotEmpty()
  endereco: string;

  @IsString()
  observacoes: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  senha: string;

  @IsBoolean()
  @IsNotEmpty()
  sexo: boolean;
}