import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { Paciente } from "@prisma/client";

@Injectable()
export class PacienteService {
    constructor(private prisma: PrismaService) {}

    async getAllPacientes(): Promise<Paciente[]> {
        return this.prisma.paciente.findMany({
            include: {
                consultas: true, // Inclui as consultas relacionadas ao paciente
            }
        });
    }

    async getPacienteById(id: number): Promise<Paciente | null> {
        return this.prisma.paciente.findUnique({
            where: { id },
            include: {
                consultas: true, // Inclui as consultas relacionadas ao paciente
            }
        });
    }

    async createPaciente(data: Paciente): Promise<Paciente> {
        return this.prisma.paciente.create({
            data,
        });
    }

    async updatePaciente(id: number, data: Paciente): Promise<Paciente> {
        return this.prisma.paciente.update({
            where: { id },
            data,
        });
    }

    async deletePaciente(id: number): Promise<Paciente> {
        return this.prisma.paciente.delete({
            where: { id },
        });
    }
}
