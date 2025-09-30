import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeController } from './like.controller';
import { LikeLogic } from './like.logic';

@Module({
  controllers: [LikeController],
  providers: [LikeService, LikeLogic],
})
export class likeModule {}
