import { Body, Controller, Delete, Post } from '@nestjs/common';
import { LikeService } from './like.service';
import { likePostDto } from './dto/likePost.dto';
import { unLikePostDto } from './dto/unLike.dto';
import { LikeLogic } from './like.logic';

@Controller('likes/')
export class LikeController {
  constructor(
    private likeService: LikeService,
    private likeLogic: LikeLogic,
  ) {
    likeLogic.likeService = likeService;
  }

  @Post('like-post')
  async likePost(@Body() like: likePostDto) {
    return await this.likeLogic.likePost(like);
  }

  @Delete('unlike-post')
  async deletePost(@Body() like: unLikePostDto) {
    return await this.likeLogic.removeLike(like);
  }
}
