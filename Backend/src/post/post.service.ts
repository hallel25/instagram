import { Post } from './entities/post.entity';
import { Injectable } from '@nestjs/common';
import { createPostDto } from './dto/createPost.dto';
import { editPostDto } from './dto/editPost.dto';
import { UUID } from 'crypto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';

export abstract class IPostService {
  abstract getAllPosts(): Promise<Post[]>;
  abstract getUsersPosts(userId: UUID): Promise<Post[]>;
  abstract addPost(post: createPostDto): Promise<void>;
  abstract editPost(post: editPostDto): Promise<void>;
  abstract deletePost(postId: UUID): Promise<void>;
}

@Injectable()
export class PostService implements IPostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    private userService: UserService,
  ) {}

  async getAllPosts(): Promise<Post[]> {
    return await this.postRepository.find({
      relations: ['user'],
    });
  }

  async getUsersPosts(userId: UUID): Promise<Post[]> {
    return await this.postRepository.find({
      where: { user: { id: userId } },
      relations: ['user'],
    });
  }

  async addPost(post: createPostDto) {
    const user = await this.userService.getUsersById(post.userId);

    const newPost: Post = {
      id: crypto.randomUUID(),
      caption: post.caption,
      imageUrl: post.imageUrl,
      user: user,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    try {
      await this.postRepository.save(newPost);
    } catch (error) {
      console.error('Error saving post:', error);
      throw new Error('Could not save post');
    }
  }

  async editPost(editedPost: editPostDto) {
    const postToEdit = await this.postRepository.findOne({
      where: { id: editedPost.id },
    });

    if (postToEdit) {
      postToEdit.caption = editedPost.caption;
      postToEdit.updatedAt = new Date();
      await this.postRepository.save(postToEdit);
    } else {
      throw new Error("post doesn't exist");
    }
  }

  async deletePost(postId: UUID) {
    const deletedPost = await this.postRepository.findOne({
      where: { id: postId },
    });

    if (deletedPost) {
      await this.postRepository.remove(deletedPost);
    } else {
      throw new Error("post doesn't exist");
    }
  }
}
