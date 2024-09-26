import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { MedicoService } from "./medico.service";
import { CreateMedicoDTO } from "./dto/create-medico.dto";
import { UpdateMedicoDTO } from "./dto/update-medico.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("medico")
export class MedicoController {
  constructor(private readonly medicoService: MedicoService){}

  @Get()
  async findAll() {
    return this.medicoService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  async findOne(@Param('id') id: string) {
    return this.medicoService.findOne(+id);
  }

  // @UseGuards(JwtAuthGuard)
  // @Post()
  // async create(@Body() createMedicoDto: CreateMedicoDTO) {
  //   return this.medicoService.create(createMedicoDto);
  // }

  @UseGuards(JwtAuthGuard)
  @Put(":id")
  async update(@Param('id') id: string, @Body() updateMedicoDto: UpdateMedicoDTO) {
    return this.medicoService.update(+id, updateMedicoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async remove(@Param('id') id: string) {
    return this.medicoService.remove(+id);
  }
}