import { IsDate, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class ReturnPostDto {
  @IsUUID()
  id: UUID;

  @IsString()
  caption: string;

  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @IsUUID()
  @IsNotEmpty()
  userId: UUID;

  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  constructor(
    caption: string,
    imageUrl: string,
    userid: UUID,
    createdAt: Date,
    id: UUID,
  ) {
    this.caption = caption;
    this.imageUrl = imageUrl;
    this.userId = userid;
    this.createdAt = createdAt;
    this.id = id;
  }
}
