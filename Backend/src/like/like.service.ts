import { UUID } from "crypto";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { Like } from "./entities/like.entity";
import { likePostDto } from "./dto/likePost.dto";

export abstract class ILikeService {
    abstract likePost(like: likePostDto);
    abstract removeLike();
}

@Injectable()
export class LikeService implements ILikeService {
    constructor(
        @InjectRepository(Like)
        private LikeRepository: Repository<Like>
    ) {}

    likePost(like: likePostDto) {
        throw new Error("Method not implemented.");
    }

    removeLike() {
        throw new Error("Method not implemented.");
    }
}