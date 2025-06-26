import { Module } from "@nestjs/common";
import { PostService } from "./post.service";
import { postController } from "./post.controller";

@Module({
    controllers: [postController],
    providers: [PostService],
})

export class userModule {}