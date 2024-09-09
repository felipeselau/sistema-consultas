import { Module } from '@nestjs/common';
import { FuncionarioModule } from './funcionario/funcionario.module';
@Module({
  imports: [FuncionarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
