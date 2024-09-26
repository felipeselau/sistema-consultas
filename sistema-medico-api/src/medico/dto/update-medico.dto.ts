import { PartialType } from "@nestjs/mapped-types";
import { CreateMedicoDTO } from "./create-medico.dto";

export class UpdateMedicoDTO extends PartialType(CreateMedicoDTO) {}