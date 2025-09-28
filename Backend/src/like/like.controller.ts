import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LikeService } from './like.service';
import { likePostDto } from './dto/likePost.dto';
import { unLikePostDto } from './dto/unLike.dto';
import { UUID } from 'crypto';
import { LikeLogic } from './like.logic';

@Controller('likes/')
export class LikeController {
  constructor(
    private likeService: LikeService,
    private likeLogic: LikeLogic,
  ) {}

  @Get(':postId')
  getPostsById(@Param('postId') postId: UUID) {
    return this.likeService.getPostsLikes(postId);
  }

  @Post('like-post')
  likePost(@Body() like: likePostDto) {
    this.likeLogic.likePost(like);
  }

  @Delete('unlike-post')
  deletePost(@Body() like: unLikePostDto) {
    this.likeLogic.removeLike(like);
  }
}
