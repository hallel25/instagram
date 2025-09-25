import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class createPostDto {
  @IsString()
  caption: string;

  @IsString()
  @IsNotEmpty({ message: "image url can't be empty" })
  imageUrl: string;

  @IsUUID()
  @IsNotEmpty({ message: "user id can't be empty" })
  userId: UUID;

  constructor(caption: string, imageUrl: string, userid: UUID) {
    this.caption = caption;
    this.imageUrl = imageUrl;
    this.userId = userid;
  }
}
