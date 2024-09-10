import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ConsultaService } from "./consulta.service";
import { Consulta } from "@prisma/client";

@Controller('api/v1/consultas')
export class ConsultaController {
    constructor(private readonly consultaService: ConsultaService) {}

    @Get()
    async getAllConsultas(): Promise<Consulta[]> {
        return this.consultaService.getAllConsultas();
    }

    @Get(':id')
    async getConsultaById(@Param('id') id: string): Promise<Consulta | null> {
        return this.consultaService.getConsultaById(Number(id));
    }

    @Post()
    async createConsulta(@Body() data: Consulta): Promise<Consulta> {
        return this.consultaService.createConsulta(data);
    }

    @Put(':id')
    async updateConsulta(@Param('id') id: string, @Body() data: Consulta): Promise<Consulta> {
        return this.consultaService.updateConsulta(Number(id), data);
    }

    @Delete(':id')
    async deleteConsulta(@Param('id') id: string): Promise<Consulta> {
        return this.consultaService.deleteConsulta(Number(id));
    }
}
