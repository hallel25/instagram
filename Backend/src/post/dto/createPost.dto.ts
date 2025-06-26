import { IsNotEmpty, IsString, IsUUID, IsUrl } from "class-validator";
import { UUID } from "crypto";

export class createPostDto {
    @IsString()
    caption: string;

    @IsUrl()
    @IsNotEmpty({ message: "image url can't be empty"})
    imageUrl: string;

    @IsUUID()
    @IsNotEmpty({ message: "user id can't be emtpy"})
    userId: UUID;

    constructor(caption: string, imageUrl: string, userid: UUID) {
        this.caption = caption;
        this.imageUrl = imageUrl;
        this.userId = userid;
    }
}