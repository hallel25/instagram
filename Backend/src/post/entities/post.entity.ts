import { UUID } from 'crypto';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column()
  caption: string;

  @Column()
  imageUrl: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
