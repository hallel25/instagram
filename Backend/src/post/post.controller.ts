import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { UUID } from "crypto";
import { createPostDto } from "./dto/createPost.dto";
import { editPostDto } from "./dto/editPost.dto";
import { PostService } from "./post.service";

@Controller('post')
export class PostController {
    constructor(private postService: PostService) {}

    @Get()
    async getAll() {
        return this.postService.getAllPosts();
    }

    @Get(':id')
    async getPostsById(@Param('id') id: UUID) {
        return this.postService.getUsersPosts(id);
    }

    @Post('/create-post')
    async createPost(
        @Body() post: createPostDto,
    ) {
        this.postService.addPost(post);
    }

    @Patch('/edit-post')
    async editPost(
        @Body() post: editPostDto,
    ) {
        this.postService.editPost(post);
    }
}