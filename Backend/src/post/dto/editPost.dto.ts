import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class editPostDto {
  @IsUUID()
  @IsNotEmpty({ message: 'post id is missing' })
  id: UUID;

  @IsString()
  caption: string;

  constructor(caption: string, id: UUID) {
    this.id = id;
    this.caption = caption;
  }
}
