import { PartialType } from "@nestjs/mapped-types";
import { CreateConsultaDTO } from "./create-consulta.dto";

export class UpdateConsultaDTO extends PartialType(CreateConsultaDTO) {}