import { likePostDto } from './dto/likePost.dto';
import { LikeService } from './like.service';
import { Like } from './entities/like.entity';
import { Injectable } from '@nestjs/common';
import { PostService } from 'src/post/post.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LikeLogic {
  constructor(
    public likeService: LikeService,
    public userService: UserService,
    public postService: PostService,
  ) {}

  async likePost(like: likePostDto) {
    try {
      const foundUser = await this.userService.getUsersById(like.userId);
      const foundPost = await this.postService.findPostById(like.postId);

      const newLike: Like = {
        id: crypto.randomUUID(),
        createdAt: new Date(),
        user: foundUser,
        post: foundPost,
      };

      await this.likeService.likePost(newLike);
    } catch {
      throw new Error("can't like post");
    }
  }

  async removeLike(like: likePostDto) {
    await this.likeService.removeLike(like);
  }
}
