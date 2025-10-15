import { TypeOrmModule } from '@nestjs/typeorm';
import { Like } from 'src/like/entities/like.entity';
import { Post } from 'src/post/entities/post.entity';
import { User } from 'src/user/entities/user.entity';

export const TypeormModule = TypeOrmModule.forRootAsync({
  useFactory: () => ({
    type: 'postgres',
    host: process.env.DB_HOST, // configService?.get<string>('DB_HOST'),
    port: process.env.DB_PORT ? +process.env.DB_PORT : 5432, // configService?.get<number>('DB_PORT'),
    username: process.env.DB_USERNAME, // configService?.get<string>('DB_USERNAME'),
    password: process.env.DB_PASSWORD, // configService?.get<string>('DB_PASSWORD'),
    database: process.env.DB_DATABASE, // configService?.get<string>('DB_DATABASE'),
    entities: [User, Post, Like],
    synchronize: true,
    schema: process.env.DB_SCHEMA,
  }),
});
