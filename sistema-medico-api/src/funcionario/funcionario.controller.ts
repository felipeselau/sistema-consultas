import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { FuncionarioService } from "./funcionario.service";
import { Funcionario, Prisma } from "@prisma/client";


@Controller('api/v1/funcionarios')
export class FuncionarioController{
    constructor(private readonly funcionarioService: FuncionarioService) {}

    @Get()
    async getAllFuncionarios(): Promise<Funcionario[] | null> {
        return this.funcionarioService.getAllFuncionarios();
    }

    @Get(':id')
    async getFuncionarioById(@Param('id') id: number): Promise<Funcionario | null> {
        return this.funcionarioService.getFuncionarioById(Number(id));
    }

    @Post()
    async createFuncionario(@Body() data: Prisma.FuncionarioCreateInput): Promise<Funcionario> {
        return this.funcionarioService.createFuncionario(data);
    }

    @Put(':id')
    async updateFuncionario(@Param('id') id: number, @Body() data: Prisma.FuncionarioUpdateInput): Promise<Funcionario> {
        return this.funcionarioService.updateFuncionario(Number(id), data);
    }

    @Delete(':id')
    async deleteFuncionario(@Param('id') id: number): Promise<Funcionario> {
        return this.funcionarioService.deleteFuncionario(Number(id));
    }


    
}