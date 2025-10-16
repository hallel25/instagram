import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeController } from './like.controller';
import { LikeLogic } from './like.logic';
import { Like } from './entities/like.entity';
import { User } from 'src/user/entities/user.entity';
import { Post } from 'src/post/entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from 'src/post/post.service';
import { UserService } from 'src/user/user.service';

@Module({
  controllers: [LikeController],
  providers: [LikeService, LikeLogic, PostService, UserService],
  imports: [TypeOrmModule.forFeature([Like, User, Post])],
})
export class LikeModule {}
