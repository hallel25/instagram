import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { UUID } from 'crypto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<{ body: { user?: UUID } }>();

    if (!req.body?.user) {
      return false;
    }

    const isAdmin = await this.userService.checkIsAdmin(req.body.user);

    return isAdmin;
  }
}
