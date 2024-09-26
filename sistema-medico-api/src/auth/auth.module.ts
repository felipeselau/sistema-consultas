import { Module } from "@nestjs/common";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { FirebaseService } from "../firebase/firebase.service";
import { AuthService } from "./auth.service";
import { AuthMedicoController } from "./auth.controller";
import { MedicoService } from "src/medico/medico.service";
import { PrismaService } from "src/prisma.service";


@Module({
  providers: [JwtAuthGuard, PrismaService, FirebaseService, AuthService, MedicoService],
  controllers: [AuthMedicoController],
  exports: [JwtAuthGuard]
})
export class AuthModule{}