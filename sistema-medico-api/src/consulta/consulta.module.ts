import { Module } from '@nestjs/common';
import { ConsultaController } from './consulta.controller';
import { ConsultaService } from './consulta.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ConsultaController],
  providers: [ConsultaService, PrismaService],
})
export class ConsultaModule {}
