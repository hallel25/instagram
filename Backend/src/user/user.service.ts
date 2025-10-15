import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UUID } from 'crypto';

export abstract class IUserService {
  abstract getAllUsers(): Promise<User[]>;
  abstract getUsersById(userId: UUID): Promise<User>;
  abstract checkIsAdmin(userId: UUID): Promise<boolean>;
}

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await this.UserRepository.find();
  }

  async getUsersById(userId: UUID): Promise<User> {
    const user = await this.UserRepository.findOne({
      where: { id: userId },
    });

    if (user) {
      return user;
    } else {
      throw new Error('User not found');
    }
  }

  async checkIsAdmin(userId: UUID): Promise<boolean> {
    const user = await this.getUsersById(userId);

    return user.isAdmin;
  }
}
