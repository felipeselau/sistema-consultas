import { Module } from '@nestjs/common';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { MedicoModule } from './medico/medico.module';
import { PacienteModule } from './paciente/paciente.module';
import { ConsultaModule } from './consulta/consulta.module';
@Module({
  imports: [
    FuncionarioModule,
    MedicoModule,
    PacienteModule,
    ConsultaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
