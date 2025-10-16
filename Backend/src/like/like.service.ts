import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';
import { Like } from './entities/like.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { returnLikeDto } from './dto/returnLike.dto';
import { unLikePostDto } from './dto/unLike.dto';
import { likePostDto } from './dto/likePost.dto';

export abstract class ILikeService {
  abstract likePost(like: Like): Promise<void>;
  abstract removeLike(like: unLikePostDto): Promise<void>;
  abstract getPostsLikes(postId: UUID): Promise<returnLikeDto[]>;
  abstract findLike(like: likePostDto): Promise<Like>;
}

@Injectable()
export class LikeService implements ILikeService {
  constructor(
    @InjectRepository(Like)
    private LikeRepository: Repository<Like>,
  ) {}

  async getPostsLikes(postId: UUID): Promise<returnLikeDto[]> {
    const likes = await this.LikeRepository.find({
      select: {
        id: true,
        user: { id: true },
        post: { id: true },
        createdAt: true,
      },
      where: { post: { id: postId } },
      relations: ['user', 'post'],
    });

    return likes.map((like) => {
      return {
        ...like,
        userId: like.user.id,
        postId: like.post.id,
      };
    });
  }

  async likePost(like: Like): Promise<void> {
    await this.LikeRepository.save(like);
  }

  async removeLike(like: unLikePostDto): Promise<void> {
    await this.LikeRepository.delete({
      user: { id: like.userId },
      post: { id: like.postId },
    });
  }

  async findLike(like: likePostDto): Promise<Like> {
    const foundLike = await this.LikeRepository.findOne({
      where: {
        user: { id: like.userId },
        post: { id: like.postId },
      },
    });

    if (!foundLike) {
      throw new Error('like not found');
    }

    return foundLike;
  }
}
