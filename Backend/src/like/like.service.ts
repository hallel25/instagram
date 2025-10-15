import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';
import { Like } from './entities/like.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export abstract class ILikeService {
  abstract likePost(like: Like): Promise<void>;
  abstract removeLike(like: Like): Promise<void>;
  abstract getPostsLikes(postId: UUID): Promise<Like[]>;
}

@Injectable()
export class LikeService implements ILikeService {
  constructor(
    @InjectRepository(Like)
    private LikeRepository: Repository<Like>,
  ) {}

  async getPostsLikes(postId: UUID): Promise<Like[]> {
    return await this.LikeRepository.find({
      where: { postId },
      relations: ['user', 'post'],
    });
  }

  async likePost(like: Like): Promise<void> {
    await this.LikeRepository.save(like);
  }

  async removeLike(like: Like): Promise<void> {
    await this.LikeRepository.remove(like);
  }
}
