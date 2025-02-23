import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";


@Injectable()
export class Guard implements CanActivate{
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()
    console.log('Guard');
    const isAuth = request.headers.authorization === 'secret';
    if(!isAuth){
      throw new UnauthorizedException('Not authorized');
    }
    return isAuth;
  }
}