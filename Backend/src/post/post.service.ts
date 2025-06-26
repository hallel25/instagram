import { UUID } from "crypto";
import { Post } from "./entities/post.entity";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { createPostDto } from "./dto/createPost.dto";
import { editPostDto } from "./dto/editPost.dto";

export abstract class IPostService {
    abstract getAllPosts(): Promise<Post[]>;
    abstract getUsersPosts(userId: UUID): Promise<Post[]>;
    abstract addPost(post: Post);
    abstract editPost(post: Post);
    abstract deletePost(postId: UUID);
}

@Injectable()
export class PostService implements IPostService {
    constructor(
        @InjectRepository(Post)
        private postRepository: Repository<Post>
    ) {}
    
    getAllPosts(): Promise<Post[]> {
        throw new Error("Method not implemented.");
    }
    
    getUsersPosts(userId: UUID): Promise<Post[]> {
        throw new Error("Method not implemented.");
    }
    
    addPost(post: createPostDto) {
        throw new Error("Method not implemented.");
    }
    
    editPost(post: editPostDto) {
        throw new Error("Method not implemented.");
    }

    deletePost(postId: UUID) {
        throw new Error("Method not implemented.");
    }
}