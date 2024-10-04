import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMedicoDTO } from './dto/create-medico.dto';
import { UpdateMedicoDTO } from './dto/update-medico.dto';
import { $Enums } from '@prisma/client';

@Injectable()
export class MedicoService {
  constructor(private prisma: PrismaService) {}

  async create(createMedicoDto: CreateMedicoDTO) {
    const {
      nome,
      cpf,
      dataNascimento,
      endereco,
      observacoes,
      email,
      senha,
      crm,
      especialidade,
      sexo,
    } = createMedicoDto;

    const user = await this.prisma.user.create({
      data: {
        nome,
        cpf,
        dataNascimento,
        endereco,
        observacoes,
        email,
        senha,
        sexo
      },
    });

    const medico = this.prisma.medico.create({
      data: {
        id: user.id, // Add the 'id' property
        crm,
        especialidade,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    return medico;
  }

  async findAll() {
    return this.prisma.medico.findMany({
      include: {
        user: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.medico.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
      },
    });
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        Medico: true,
      }
    });
  }

  async getEspecialidades() {
    return Object.values($Enums.Especialidade);
  }

  async findByEspecialidade(especialidade: $Enums.Especialidade) {
    return this.prisma.medico.findMany({
      where: {
        especialidade,
      },
      include: {
        user: true,
      },
    });
  }

  //dado um período de tempo, retorna os dias disponíveis de um médico
  async getDiasDisponiveis(medicoId: number, dataInicio: Date, dataFim: Date) {
    const consultas = await this.prisma.consulta.findMany({
      where: {
        medicoId,
        horario: {
          gte: dataInicio,
          lte: dataFim,
        },
      },
    });

    const diasDisponiveis = [];
    const dias = [];
    const dataAtual = new Date(dataInicio);

    while (dataAtual <= dataFim) {
      dias.push(new Date(dataAtual));
      dataAtual.setDate(dataAtual.getDate() + 1);
    }

    for (const dia of dias) {
      const consultasDia = consultas.filter(
        (consulta) =>
          consulta.horario.getFullYear() === dia.getFullYear() &&
          consulta.horario.getMonth() === dia.getMonth() &&
          consulta.horario.getDate() === dia.getDate()
      );

      if (consultasDia.length < 9) {
        diasDisponiveis.push(dia);
      }
    }

    return diasDisponiveis;
  }

  async update(id: number, updateMedicoDto: UpdateMedicoDTO) {
    const {
      nome,
      cpf,
      dataNascimento,
      endereco,
      observacoes,

      crm,
      especialidade,
    } = updateMedicoDto;

    const medico = await this.prisma.medico.update({
      where: { id },
      data: {
        crm,
        especialidade,
        user: {
          update: {
            nome,
            cpf,
            dataNascimento,
            endereco,
            observacoes,
          },
        },
      },
      include: { user: true },
    });

    return medico;
  }

  async remove(id: number) {
    const medico = this.prisma.medico.delete({
      where: {
        id,
      },
    });

    await this.prisma.user.delete({
      where: { id: (await medico).id },
    });
  }
}
