import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { MedicoService } from "./medico.service";
import { Medico } from "@prisma/client";

@Controller('api/v1/medicos')
export class MedicoController {
    constructor(private readonly medicoService: MedicoService) {}

    @Get()
    async getAllMedicos(): Promise<Medico[]> {
        return this.medicoService.getAllMedicos();
    }

    @Get(':id')
    async getMedicoById(@Param('id') id: string): Promise<Medico | null> {
        return this.medicoService.getMedicoById(Number(id));
    }

    @Post()
    async createMedico(@Body() data: Medico): Promise<Medico> {
        return this.medicoService.createMedico(data);
    }

    @Put(':id')
    async updateMedico(@Param('id') id: string, @Body() data: Medico): Promise<Medico> {
        return this.medicoService.updateMedico(Number(id), data);
    }

    @Delete(':id')
    async deleteMedico(@Param('id') id: string): Promise<Medico> {
        return this.medicoService.deleteMedico(Number(id));
    }
}
