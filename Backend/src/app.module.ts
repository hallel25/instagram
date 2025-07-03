import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userModule } from './post/post.module';
import { postModule } from './user/user.module';
import { likeModule } from './like/like.module';

@Module({
  imports: [userModule, postModule, likeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
