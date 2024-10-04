import { PartialType } from "@nestjs/mapped-types";
import { CreatePacienteDTO } from "./create-paciente.dto";


export class UpdatePacienteDTO extends PartialType(CreatePacienteDTO) {}