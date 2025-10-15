import { MiddlewareConsumer, Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { LikeModule } from './like/like.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import 'dotenv/config';
import { TypeormModule } from './typeorm/typeorm.module';

@Module({
  imports: [TypeormModule, UserModule, PostModule, LikeModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
