import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { LikeService } from "./like.service";
import { likePostDto } from "./dto/likePost.dto";
import { unLikePostDto } from "./dto/unLike.dto";

@Controller('like')
export class LikeController {
  constructor(private likeService: LikeService) {}

  // @Post('/like-post')
  // async likePost(@Body() like: likePostDto) {
  //   return await this.likeService.likePost(like);
  // }

  // @Delete('unlike-post')
  // async deletePost(@Body() like: unLikePostDto) {
  //   return await this.likeService.removeLike(like);
  // }
}