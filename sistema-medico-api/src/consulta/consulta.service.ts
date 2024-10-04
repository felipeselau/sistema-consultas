import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { CreateConsultaDTO } from "./dto/create-consulta.dto";
import { $Enums } from "@prisma/client";
import { UpdateConsultaDTO } from "./dto/update-consulta.dto";


@Injectable()
export class ConsultaService {
  constructor(private prisma: PrismaService) {}

  async create(createConsultaDto: CreateConsultaDTO) {
    
    return await this.prisma.consulta.create({
      data: {
        horario: createConsultaDto.horario,
        status: createConsultaDto.status,
        especialidade: createConsultaDto.especialidade,
        observacoes: createConsultaDto.observacoes,
        medico: {
          connect: {
            id: createConsultaDto.medicoId,
          },
        },
        paciente: {
          connect: {
            id: createConsultaDto.pacienteId,
          },
        },
      },
    })

  }

  async findAll() {
    return await this.prisma.consulta.findMany({
      include: {
        medico: true,
        paciente: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.consulta.findUnique({
      where: {
        id,
      },
      include: {
        medico: true,
        paciente: true,
      },
    });
  }

  async findByPacienteId(pacienteId: number) {
    return await this.prisma.consulta.findMany({
      where: {
        pacienteId,
      },
      include: {
        medico: true,
        paciente: true,
      },
    });
  }

  async findByMedicoId(medicoId: number) {
    return await this.prisma.consulta.findMany({
      where: {
        medicoId,
      },
      include: {
        medico: true,
        paciente: true,
      },
    });
  }

  async findByEspecialidade(especialidade: $Enums.Especialidade) {
    return await this.prisma.consulta.findMany({
      where: {
        especialidade,
      },
      include: {
        medico: true,
        paciente: true,
      },
    });
  }

  async findByStatus(id: number, status: $Enums.Status) {
    return await this.prisma.consulta.findMany({
      where: {
        id,
        status,
      },
      include: {
        medico: true,
        paciente: true,
      },
    });
  }

  async update(id: number, data: UpdateConsultaDTO) {
    return this.prisma.consulta.update({
      where: {
        id,
      },
      data,
    });
  }

  async updateStatus(id: number, status: $Enums.Status) {
    const consulta = await this.prisma.consulta.findUnique({
      where: {
        id,
      },
    });

    return await this.prisma.consulta.update({
      where: {
        id,
      },
      data: {
        ...consulta,
        status: status,
      },
    })
  }
}