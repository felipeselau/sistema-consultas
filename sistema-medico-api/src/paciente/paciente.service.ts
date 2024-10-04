import { PrismaService } from "src/prisma.service";
import { CreatePacienteDTO } from "./dto/create-paciente.dto";
import { UpdatePacienteDTO } from "./dto/update-paciente.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PacienteService {
  constructor (private prisma: PrismaService){}

  async create(createPacienteDto: CreatePacienteDTO){
    const {
      nome,
      cpf,
      dataNascimento,
      endereco,
      observacoes,
      email,
      senha,
      sexo,
    } = createPacienteDto;

    const user = await this.prisma.user.create({
      data: {
        nome,
        cpf,
        dataNascimento,
        endereco,
        observacoes,
        email,
        senha,
        sexo,
      },
    });

    const paciente = this.prisma.paciente.create({
      data: {
        id: user.id,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    return paciente;
  }

  async findAll(){
    return this.prisma.paciente.findMany({
      include: {
        user: true,
      },
    });
  }

  async findOne(id: number){
    return this.prisma.paciente.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
      },
    });
  }

  async findByEmail(email: string){
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async update(id: number, updatePacienteDto: UpdatePacienteDTO){
    const {
      nome,
      cpf,
      dataNascimento,
      endereco,
      observacoes,
      email,
      senha,
      sexo,
    } = updatePacienteDto;

    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        nome,
        cpf,
        dataNascimento,
        endereco,
        observacoes,
        email,
        senha,
        sexo,
      },
    });

    const paciente = this.prisma.paciente.update({
      where: {
        id,
      },
      data: {
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    return paciente;
  }

  async remove(id: number){
    return this.prisma.paciente.delete({
      where: {
        id,
      },
    });
  }
}