import { UUID } from "crypto";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { User } from "./entities/user.entity";

export abstract class IUserService {
    abstract getAllUsers(): Promise<User[]>;
}

@Injectable()
export class UserService implements IUserService {
    constructor(
        @InjectRepository(User)
        private UserRepository: Repository<User>
    ) {}

    getAllUsers(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
}