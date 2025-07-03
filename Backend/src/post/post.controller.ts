import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UUID } from "crypto";
import { createPostDto } from "./dto/createPost.dto";
import { editPostDto } from "./dto/editPost.dto";
import { PostService } from "./post.service";

@Controller('posts')
export class PostController {
    constructor(private postService: PostService) {}

    @Get()
    getAll() {
        return this.postService.getAllPosts();
    }

    @Get(':userId')
    getPostsById(@Param('userId') userId: UUID) {
        return this.postService.getUsersPosts(userId);
    }

    @Post('/create-post')
    createPost(
        @Body() post: createPostDto,
    ) {
        this.postService.addPost(post);
    }

    @Patch('/edit-post')
    editPost(
        @Body() post: editPostDto,
    ) {
        this.postService.editPost(post);
    }

    @Delete('delete/:postId')
    deletePost(@Param('postId') postId: UUID) {
        return this.postService.deletePost(postId);
    }
}