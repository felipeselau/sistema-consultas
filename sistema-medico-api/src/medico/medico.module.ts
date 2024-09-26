import { Module } from "@nestjs/common";
import { MedicoController } from "./medico.controller";
import { MedicoService } from "./medico.service";
import { PrismaService } from "../prisma.service";
import { FirebaseService } from "src/firebase/firebase.service";
import { AuthService } from "src/auth/auth.service";
import { FirebaseModule } from "src/firebase/firebase.module";

@Module({
  controllers: [MedicoController],
  providers: [MedicoService, PrismaService, FirebaseService, AuthService]
})
export class MedicoModule{}