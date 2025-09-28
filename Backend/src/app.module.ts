import { Module } from '@nestjs/common';
import { userModule } from './post/post.module';
import { postModule } from './user/user.module';
import { likeModule } from './like/like.module';

@Module({
  imports: [userModule, postModule, likeModule],
})
export class AppModule {}
