import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Module({
  controllers: [PostController],
  providers: [PostService, UserService],
  imports: [TypeOrmModule.forFeature([Post, User])],
})
export class PostModule {}
