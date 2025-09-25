import { UUID } from 'crypto';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column()
  caption: string;

  @Column()
  imageUrl: string;

  @Column()
  @ManyToOne(() => User, (user) => user.id)
  userId: UUID;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
