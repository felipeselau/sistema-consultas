import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { Consulta } from "@prisma/client";

@Injectable()
export class ConsultaService {
    constructor(private prisma: PrismaService) {}

    async getAllConsultas(): Promise<Consulta[]> {
        return this.prisma.consulta.findMany({
            include: {
                medico: true,
                paciente: true,
                funcionario: true,
            }
        });
    }

    async getConsultaById(id: number): Promise<Consulta | null> {
        return this.prisma.consulta.findUnique({
            where: { id },
            include: {
                medico: true,
                paciente: true,
                funcionario: true,
            }
        });
    }

    async createConsulta(data: any): Promise<Consulta> {
        return this.prisma.consulta.create({
            data: {
                ...data,
                medicoId: data.medicoId,
                pacienteId: data.pacienteId,
                funcionarioId: data.funcionarioId,
            }
        });
    }

    async updateConsulta(id: number, data: any): Promise<Consulta> {
        return this.prisma.consulta.update({
            where: { id },
            data: {
                ...data,
                medicoId: data.medicoId,
                pacienteId: data.pacienteId,
                funcionarioId: data.funcionarioId,
            }
        });
    }

    async deleteConsulta(id: number): Promise<Consulta> {
        return this.prisma.consulta.delete({
            where: { id }
        });
    }
}
