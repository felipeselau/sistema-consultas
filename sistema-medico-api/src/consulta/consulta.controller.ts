import { Body, Controller, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ConsultaService } from "./consulta.service";
import { $Enums } from "@prisma/client";
import { CreateConsultaDTO } from "./dto/create-consulta.dto";
import { UpdateConsultaDTO } from "./dto/update-consulta.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller('consulta')
export class ConsultaController {
  constructor(private readonly consultaService: ConsultaService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.consultaService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.consultaService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('paciente/:pacienteId')
  async findByPacienteId(@Param('pacienteId') pacienteId: number) {
    return await this.consultaService.findByPacienteId(pacienteId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('medico/:medicoId')
  async findByMedicoId(@Param('medicoId') medicoId: number) {
    return await this.consultaService.findByMedicoId(medicoId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('especialidade/:especialidade')
  async findByEspecialidade(@Param('especialidade') especialidade: $Enums.Especialidade) {
    return await this.consultaService.findByEspecialidade(especialidade);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/status/:status')
  async findByStatus(@Param('id') id: number, @Param('status') status: $Enums.Status) {
    return await this.consultaService.findByStatus(id, status);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createConsultaDTO: CreateConsultaDTO) {
    //TODO: Implementar Regras de negócio
    return await this.consultaService.create(createConsultaDTO);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateConsultaDTO: UpdateConsultaDTO) {
    return await this.consultaService.update(id, updateConsultaDTO);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id/status/:status')
  async updateStatus(@Param('id') id: number, @Param('status') status: $Enums.Status) {
    return await this.consultaService.updateStatus(id, status);
  }
}