import { mockLikes, mockPosts } from 'src/DB/DB';
import { likePostDto } from './dto/likePost.dto';
import { LikeService } from './like.service';
import { Like } from './entities/like.entity';

export abstract class ILikeLogic {
  abstract likePost(like: likePostDto);
  abstract removeLike(like: likePostDto);
}

export class LikeLogic implements ILikeLogic {
  constructor(private likeService: LikeService) {}

  likePost(like: likePostDto) {
    const foundPost = mockPosts.find(
      (post) => post.userId == like.userId && post.id == like.postId,
    );

    const foundLike = mockLikes.find(
      (likeObj) =>
        likeObj.userId == like.userId && likeObj.postId == like.postId,
    );

    if (foundLike) {
      throw new Error('like already exists');
    } else if (!foundPost) {
      throw new Error('post not found');
    } else {
      this.likeService.likePost({
        id: crypto.randomUUID(),
        postId: like.postId,
        userId: like.userId,
        createdAt: new Date(),
      } as Like);
    }
  }

  removeLike(like: likePostDto) {
    const deletedLike = mockLikes.find(
      (likeObj) =>
        likeObj.userId == like.userId && likeObj.postId == like.postId,
    );

    if (!deletedLike) {
      throw new Error("like doesn't exist");
    } else {
      this.likeService.removeLike(deletedLike);
    }
  }
}
