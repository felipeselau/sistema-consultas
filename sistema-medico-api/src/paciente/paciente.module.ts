import { Module } from '@nestjs/common';
import { PacienteController } from './paciente.controller';
import { PacienteService } from './paciente.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PacienteController],
  providers: [PacienteService, PrismaService],
})
export class PacienteModule {}
