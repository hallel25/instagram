import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { LikeService } from "./like.service";
import { likePostDto } from "./dto/likePost.dto";

@Controller('like')
export class LikeController {
    constructor(private likeService: LikeService) {}

    @Post('/like-post')
    async createPost(
        @Body() like: likePostDto,
    ) {
        this.likeService.likePost(like);
    }

    // send an id or create a DTO?
    // @Delete('delete/:postId')
    // async deletePost(@Param('postId') postId: UUID) {
    //     return this.likeService.removeLike(postId);
    // }
}