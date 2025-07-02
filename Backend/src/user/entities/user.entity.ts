import { UUID } from "crypto"
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column()
  username: string;

  @Column()
  email: string;
}