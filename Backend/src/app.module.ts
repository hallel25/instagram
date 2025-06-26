import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userModule } from './post/post.module';
import { postModule } from './user/user.module';

@Module({
  imports: [userModule, postModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
