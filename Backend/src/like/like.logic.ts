import { likePostDto } from './dto/likePost.dto';
import { LikeService } from './like.service';
import { Like } from './entities/like.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Post } from 'src/post/entities/post.entity';

@Injectable()
export class LikeLogic {
  constructor(
    public likeService: LikeService,
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Like)
    private likeRepository: Repository<Like>,
  ) {}

  async likePost(like: likePostDto) {
    const foundPost = await this.postRepository.findOne({
      where: { id: like.postId },
    });
    const foundUser = await this.userRepository.findOne({
      where: { id: like.userId },
    });

    const foundLike = await this.likeRepository.findOne({
      where: {
        userId: like.userId,
        postId: like.postId,
      },
    });

    if (foundLike) {
      throw new Error('like already exists');
    } else if (!foundPost) {
      throw new Error('post not found');
    } else if (!foundUser) {
      throw new Error('user not found');
    }

    await this.likeService.likePost({
      id: crypto.randomUUID(),
      postId: like.postId,
      userId: like.userId,
      createdAt: new Date(),
      user: foundUser,
      post: foundPost,
    } as Like);
  }

  async removeLike(like: likePostDto) {
    const deletedLike = await this.likeRepository.findOne({
      where: {
        userId: like.userId,
        postId: like.postId,
      },
    });

    if (!deletedLike) {
      throw new Error("like doesn't exist");
    } else {
      await this.likeService.removeLike(deletedLike);
    }
  }
}
