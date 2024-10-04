import { Module } from "@nestjs/common";
import { MedicoController } from "./medico.controller";
import { MedicoService } from "./medico.service";
import { PrismaService } from "../prisma.service";
import { FirebaseService } from "src/firebase/firebase.service";
import { AuthService } from "src/auth/auth.service";
import { FirebaseModule } from "src/firebase/firebase.module";
import { PacienteService } from "src/paciente/paciente.service";

@Module({
  controllers: [MedicoController],
  providers: [MedicoService, PacienteService ,PrismaService, FirebaseService, AuthService]
})
export class MedicoModule{}