import { ExecutionContext, Injectable } from "@nestjs/common";
import { FirebaseService } from "../firebase/firebase.service";

@Injectable()
export class JwtAuthGuard {
  constructor(private readonly firebaseService: FirebaseService){}

  async canActivate(context: ExecutionContext): Promise<boolean>{
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers.authorization;

    if(!authorization){
      throw new Error('Token não informado');
    }
    
    const token = authorization.split(' ')[1];

    try{
      const DecodedToken = await this.firebaseService.verifyToken(token);
      request.user = DecodedToken;
      return true;
    }catch(err){
      throw new Error(`Token inválido: ${err.message}`);
    }
  }
} 