import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';
import { mockLikes } from 'src/DB/DB';
import { Like } from './entities/like.entity';

export abstract class ILikeService {
  abstract likePost(like: Like);
  abstract removeLike(like: Like);
  abstract getPostsLikes(postId: UUID);
}

@Injectable()
export class LikeService implements ILikeService {
  // constructor(
  //     @InjectRepository(Like)
  //     private LikeRepository: Repository<Like>
  // ) {}

  getPostsLikes(postId: UUID) {
    return mockLikes.filter((likeObj) => likeObj.postId == postId);
  }

  likePost(like: Like) {
    mockLikes.push(like);
  }

  removeLike(like: Like) {
    const removedLikeIndex = mockLikes.indexOf(like);

    if (removedLikeIndex != -1) {
      mockLikes.splice(removedLikeIndex, 1);
    }
  }
}
