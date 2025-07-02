import { UUID } from "crypto";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { User } from "./entities/user.entity";
import { mockUsers } from "src/DB/DB";

export abstract class IUserService {
    abstract getAllUsers(): User[];
}

@Injectable()
export class UserService implements IUserService {
    // constructor(
    //     @InjectRepository(User)
    //     private UserRepository: Repository<User>
    // ) {}

    getAllUsers(): User[] {
        return mockUsers;
    }
}