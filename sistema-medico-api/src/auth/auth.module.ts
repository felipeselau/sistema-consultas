import { Module } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { FirebaseService } from '../firebase/firebase.service';
import { AuthService } from './auth.service';
import { AuthMedicoController, AuthPacienteController } from './auth.controller';
import { MedicoService } from 'src/medico/medico.service';
import { PrismaService } from 'src/prisma.service';
import { PacienteService } from 'src/paciente/paciente.service';

@Module({
  providers: [
    JwtAuthGuard,
    PrismaService,
    FirebaseService,
    AuthService,
    MedicoService,
    PacienteService,
  ],
  controllers: [AuthMedicoController, AuthPacienteController],
  exports: [JwtAuthGuard],
})
export class AuthModule {}
