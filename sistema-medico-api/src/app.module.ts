import { Module } from '@nestjs/common';
import { MedicoModule } from './medico/medico.module';
import { AuthModule } from './auth/auth.module';
import { FirebaseModule } from './firebase/firebase.module';
@Module({
  imports: [
    MedicoModule,
    AuthModule,
    FirebaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
