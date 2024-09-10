import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PacienteService } from "./paciente.service";
import { Paciente } from "@prisma/client";

@Controller('api/v1/pacientes')
export class PacienteController {
    constructor(private readonly pacienteService: PacienteService) {}

    @Get()
    async getAllPacientes(): Promise<Paciente[]> {
        return this.pacienteService.getAllPacientes();
    }

    @Get(':id')
    async getPacienteById(@Param('id') id: string): Promise<Paciente | null> {
        return this.pacienteService.getPacienteById(Number(id));
    }

    @Post()
    async createPaciente(@Body() data: Paciente): Promise<Paciente> {
        return this.pacienteService.createPaciente(data);
    }

    @Put(':id')
    async updatePaciente(@Param('id') id: string, @Body() data: Paciente): Promise<Paciente> {
        return this.pacienteService.updatePaciente(Number(id), data);
    }

    @Delete(':id')
    async deletePaciente(@Param('id') id: string): Promise<Paciente> {
        return this.pacienteService.deletePaciente(Number(id));
    }
}
