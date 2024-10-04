import { Module } from '@nestjs/common';
import { MedicoModule } from './medico/medico.module';
import { AuthModule } from './auth/auth.module';
import { FirebaseModule } from './firebase/firebase.module';
import { PacienteModule } from './paciente/paciente.module';
@Module({
  imports: [
    MedicoModule,
    PacienteModule,
    AuthModule,
    FirebaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
