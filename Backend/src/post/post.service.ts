import { Post } from './entities/post.entity';
import { Injectable } from '@nestjs/common';
import { createPostDto } from './dto/createPost.dto';
import { editPostDto } from './dto/editPost.dto';
import { mockPosts } from 'src/DB/DB';
import { UUID } from 'crypto';

export abstract class IPostService {
  abstract getAllPosts(): Post[];
  abstract getUsersPosts(userId: UUID): Post[];
  abstract addPost(post: createPostDto);
  abstract editPost(post: Post);
  abstract deletePost(postId: UUID);
}

@Injectable()
export class PostService implements IPostService {
  // constructor(
  //   @InjectRepository(Post)
  //   private postRepository: Repository<Post>,
  // ) {}

  getAllPosts(): Post[] {
    return mockPosts;
  }

  getUsersPosts(userId: UUID): Post[] {
    return mockPosts.filter((post) => post.userId == userId);
  }

  addPost(post: createPostDto) {
    mockPosts.push({
      id: crypto.randomUUID(),
      caption: post.caption,
      imageUrl: post.imageUrl,
      userId: post.userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  editPost(editedPost: editPostDto) {
    const postToEdit = mockPosts.find((post) => (post.id = editedPost.id));

    if (postToEdit) {
      postToEdit.caption = editedPost.caption;
    } else {
      throw new Error("post doesn't exist");
    }
  }

  deletePost(postId: UUID) {
    const deletedPost = mockPosts.find((post) => post.id == postId);

    if (deletedPost) {
      const removedPostIndex = mockPosts.indexOf(deletedPost);
      if (removedPostIndex != -1) {
        mockPosts.splice(removedPostIndex, 1);
      }
    } else {
      throw new Error("post doesn't exist");
    }
  }
}
