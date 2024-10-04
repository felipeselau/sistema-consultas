import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { PacienteService } from "./paciente.service";
import { CreatePacienteDTO } from "./dto/create-paciente.dto";


@Controller('paciente')
export class PacienteController {
  constructor(private pacienteService: PacienteService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.pacienteService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.pacienteService.findOne(id);
  }

  // @UseGuards(JwtAuthGuard)
  // @Post()
  // async create(@Body() createPacienteDto: CreatePacienteDTO) {
  //   return await this.pacienteService.create(createPacienteDto);
  // }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: number, @Body() updatePacienteDto: CreatePacienteDTO) {
    return await this.pacienteService.update(id, updatePacienteDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.pacienteService.remove(id);
  }
}	