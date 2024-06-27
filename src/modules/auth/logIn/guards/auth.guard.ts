import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';


@Injectable()
export class AuthJWTGuard implements CanActivate {
  constructor(private jwtService: JwtService){}
 async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const ctx = context.switchToHttp()
    const request = ctx.getRequest<Request>()
    const [type, token] = request.headers.authorization?.split(' ') ?? [];

    if (type === 'Bearer') {
      try {
        const payload = await this.jwtService.verifyAsync(token, {
          secret: process.env.JWT_SECRET,
        });
  
        request['accessToken'] = payload;
        return true
      } catch {
        throw new UnauthorizedException('token nao autorizado');
      }
    }
  }
}


