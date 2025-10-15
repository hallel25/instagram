import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UUID } from 'crypto';
import { createPostDto } from './dto/createPost.dto';
import { editPostDto } from './dto/editPost.dto';
import { PostService } from './post.service';
import { isAdmin } from 'src/decorators/isAdmin.decorator';
import { RolesGuard } from 'src/guards/isAdmin.guard';

@Controller('posts/')
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

  @UseGuards(RolesGuard)
  @isAdmin(true)
  @Post('create-post')
  async createPost(@Body() post: createPostDto) {
    return await this.postService.addPost(post);
  }
  @Patch('edit-post')
  async editPost(@Body() post: editPostDto) {
    return await this.postService.editPost(post);
  }

  @Delete('delete/:postId')
  async deletePost(@Param('postId') postId: UUID) {
    return await this.postService.deletePost(postId);
  }
}
