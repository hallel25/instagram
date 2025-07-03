import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Like } from './entities/like.entity';
import { likePostDto } from './dto/likePost.dto';
import { unLikePostDto } from './dto/unLike.dto';
import { UUID } from 'crypto';
import { mockLikes } from 'src/DB/DB';
import { log } from 'console';

export abstract class ILikeService {
  abstract likePost(like: likePostDto);
  abstract removeLike(like: likePostDto);
  abstract getPostsLikes(postId: UUID);
}

@Injectable()
export class LikeService implements ILikeService {
  // constructor(
  //     @InjectRepository(Like)
  //     private LikeRepository: Repository<Like>
  // ) {}

  getPostsLikes(postId: UUID) {
    return mockLikes.filter((likeObj) => likeObj.postId == postId);
  }

  likePost(like: likePostDto) {
    console.log({
      id: crypto.randomUUID(),
      postId: like.postId,
      userId: like.userId,
      createdAt: new Date(),
    });
    console.log(mockLikes.length);

    mockLikes.push({
      id: crypto.randomUUID(),
      postId: like.postId,
      userId: like.userId,
      createdAt: new Date(),
    });

    console.log(mockLikes.length);
  }

  removeLike(like: unLikePostDto) {
    const deletedLike = mockLikes.find(
      (likeObj) =>
        likeObj.userId == like.userId && likeObj.postId == like.postId,
    );

    if (deletedLike) {
      const removedLikeIndex = mockLikes.indexOf(deletedLike);
      removedLikeIndex != -1 && mockLikes.splice(removedLikeIndex, 1);
    } else {
      throw new Error('post doesnt exist');
    }
  }
}
