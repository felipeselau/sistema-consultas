import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { Medico } from "@prisma/client";

@Injectable()
export class MedicoService {
    constructor(private prisma: PrismaService) {}

    async getAllMedicos(): Promise<Medico[]> {
        return this.prisma.medico.findMany({
            include: {
                consultas: true, // Inclui as consultas relacionadas ao médico
            }
        });
    }

    async getMedicoById(id: number): Promise<Medico | null> {
        return this.prisma.medico.findUnique({
            where: { id },
            include: {
                consultas: true, // Inclui as consultas relacionadas ao médico
            }
        });
    }

    async createMedico(data: Medico): Promise<Medico> {
        return this.prisma.medico.create({
            data,
        });
    }

    async updateMedico(id: number, data: Medico): Promise<Medico> {
        return this.prisma.medico.update({
            where: { id },
            data,
        });
    }

    async deleteMedico(id: number): Promise<Medico> {
        return this.prisma.medico.delete({
            where: { id },
        });
    }
}
