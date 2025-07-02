import { IsDate, IsNotEmpty, IsUUID } from "class-validator";
import { UUID } from "crypto";

export class likePostDto {
    @IsDate()
    createdAt: Date;

    @IsUUID()
    @IsNotEmpty({ message: "post id can't be emtpy"})
    postId: UUID;

    @IsUUID()
    @IsNotEmpty({ message: "user id can't be emtpy"})
    userId: UUID;

    constructor(createdAt: Date, postId: UUID, userid: UUID) {
        this.createdAt = createdAt;
        this.postId = postId;
        this.userId = userid;
    }
}