import { Body, Controller, Post,  } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateMedicoDTO } from "src/medico/dto/create-medico.dto";
import { LoginDTO } from "./dto/login.dto";

@Controller('auth/medico')
export class AuthMedicoController{
  constructor(private readonly authService: AuthService){}

  @Post('register')
  async register(@Body() createMedicoDTO: CreateMedicoDTO ){
    return this.authService.registerMedico(createMedicoDTO);
  }

  @Post('login')
  async login(@Body() loginDTO: LoginDTO){
    return this.authService.loginMedico(loginDTO);
  }
}