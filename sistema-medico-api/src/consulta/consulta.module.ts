import { Module } from '@nestjs/common';
import { ConsultaController } from './consulta.controller';
import { ConsultaService } from './consulta.service';
import { PrismaService } from 'src/prisma.service';
import { MedicoService } from 'src/medico/medico.service';
import { PacienteService } from 'src/paciente/paciente.service';
import { AuthService } from 'src/auth/auth.service';

@Module({
  controllers: [ConsultaController],
  providers: [
    ConsultaService,
    PrismaService,
    MedicoService,
    PacienteService,
    AuthService,
  ],
})
export class ConsultaModule {}
