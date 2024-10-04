import { Module } from '@nestjs/common';
import { PacienteController } from './paciente.controller';
import { PacienteService } from './paciente.service';
import { FirebaseService } from 'src/firebase/firebase.service';
import { AuthService } from 'src/auth/auth.service';
import { MedicoService } from 'src/medico/medico.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PacienteController],
  providers: [
    PacienteService,
    PrismaService,
    FirebaseService,
    MedicoService,
    AuthService,
  ],
})
export class PacienteModule {}
