import { IsDate, IsNotEmpty, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class returnLikeDto {
  @IsUUID()
  @IsNotEmpty()
  id: UUID;

  @IsUUID()
  @IsNotEmpty()
  postId: UUID;

  @IsUUID()
  @IsNotEmpty()
  userId: UUID;

  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  constructor(createdAt: Date, postId: UUID, userId: UUID, likeId: UUID) {
    this.postId = postId;
    this.userId = userId;
    this.createdAt = createdAt;
    this.id = likeId;
  }
}
