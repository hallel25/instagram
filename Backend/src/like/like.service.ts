import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { Like } from "./entities/like.entity";
import { likePostDto } from "./dto/likePost.dto";
import { unLikePostDto } from "./dto/unLike.dto";

export abstract class ILikeService {
//   abstract likePost(like: likePostDto);
//   abstract removeLike(like: likePostDto);
}

@Injectable()
export class LikeService implements ILikeService {
    // constructor(
    //     @InjectRepository(Like)
    //     private LikeRepository: Repository<Like>
    // ) {}

    // async likePost(like: likePostDto) {
    //     return await this.LikeRepository.save(like);
    // }

    // async removeLike(like: unLikePostDto) {
    //     return await this.LikeRepository.delete(like);
    // }
}