import { Injectable } from "@nestjs/common";
import { Funcionario } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class FuncionarioService {
    constructor(private prisma: PrismaService) {}

    async getAllFuncionarios(): Promise<Funcionario[]> {
        return this.prisma.funcionario.findMany();
    }

    async getFuncionarioById(id: number): Promise<Funcionario> {
        return this.prisma.funcionario.findUnique({
            where: { id }
        });
    }

    async createFuncionario(data: Prisma.FuncionarioCreateInput): Promise<Funcionario> {
        return this.prisma.funcionario.create({ data });
    }

    async updateFuncionario(id: number, data: Prisma.FuncionarioUpdateInput): Promise<Funcionario> {
        return this.prisma.funcionario.update({
            where: { id },
            data: { ...data }
        });
    }

    async deleteFuncionario(id: number): Promise<Funcionario> {
        return this.prisma.funcionario.delete({
            where: { id }
        });
    }
}