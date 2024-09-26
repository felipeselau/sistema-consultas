import { Injectable } from '@nestjs/common';
import { CreateMedicoDTO } from 'src/medico/dto/create-medico.dto';
import { MedicoService } from 'src/medico/medico.service';

import * as bcrypt from 'bcrypt';
import * as admin from 'firebase-admin';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private medicoService: MedicoService) {}

  async registerMedico(createMedicoDTO: CreateMedicoDTO) {
    // hash da senha
    // chamar service create medico
    const { senha } = createMedicoDTO;

    const hashedPassword = await bcrypt.hash(senha, 10);

    this.medicoService.create({ ...createMedicoDTO, senha: hashedPassword });

    //registro no firebase
    await admin.auth().createUser({
      email: createMedicoDTO.email,
      password: createMedicoDTO.senha,
    });

    return {
      message: 'Medico registrado com sucesso',
      status: 201,
      data: createMedicoDTO,
    };
  }

  async loginMedico(loginDTO: LoginDTO) {
    const { email, senha } = loginDTO;

    const user = await this.medicoService.findByEmail(email);
    if (!user) {
      throw new Error('Email Inválido');
    }

    const isPasswordValid = await bcrypt.compare(senha, user.senha);
    if (!isPasswordValid) {
      throw new Error('Senha Inválida');
    }

    const customToken = await admin
      .auth()
      .createCustomToken(user.id.toString());

    const request = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${process.env.FIREBASE_API_KEY}`,
      {
        method: 'POST',
        body: JSON.stringify({
          token: customToken,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const data = await request.json();

    const token = data.idToken;
    const refreshToken = data.refreshToken;

    return {
      message:
        'Login realizado com sucesso',
      status: 200,
      data: {
        user,
        token,
        refreshToken,
      },
    };
  }
}
