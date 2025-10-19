import { Injectable } from '@nestjs/common';
import { Like } from './entities/like.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { unLikePostDto } from './dto/unLike.dto';

export abstract class ILikeService {
  abstract likePost(like: Like): Promise<void>;
  abstract removeLike(like: unLikePostDto): Promise<void>;
}

@Injectable()
export class LikeService implements ILikeService {
  constructor(
    @InjectRepository(Like)
    private LikeRepository: Repository<Like>,
  ) {}

  async likePost(like: Like): Promise<void> {
    await this.LikeRepository.save(like);
  }

  async removeLike(like: unLikePostDto): Promise<void> {
    await this.LikeRepository.delete({
      user: { id: like.userId },
      post: { id: like.postId },
    });
  }
}
