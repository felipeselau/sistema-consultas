import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMedicoDTO } from './dto/create-medico.dto';
import { UpdateMedicoDTO } from './dto/update-medico.dto';

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
