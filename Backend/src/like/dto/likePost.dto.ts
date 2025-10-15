import { IsNotEmpty, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class likePostDto {
  @IsUUID()
  @IsNotEmpty({ message: "post id can't be empty" })
  postId: UUID;

  @IsUUID()
  @IsNotEmpty({ message: "user id can't be empty" })
  userId: UUID;

  constructor(postId: UUID, userId: UUID) {
    this.postId = postId;
    this.userId = userId;
  }
}
