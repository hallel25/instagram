import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class editPostDto {
  @IsString()
  caption: string;

  @IsUrl()
  @IsNotEmpty({ message: "image url can't be empty" })
  imageUrl: string;

  constructor(caption: string, imageUrl: string) {
    this.caption = caption;
    this.imageUrl = imageUrl;
  }
}
