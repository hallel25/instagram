import { UUID } from "crypto"
import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm"
import { User } from "../User/user.entity"

@Entity()
export class Post {
    @PrimaryColumn()
    id: UUID

    @Column()
    caption: string

    @Column()
    imageUrl: string

    @Column()
    @ManyToOne(() => User, (user) => user.id)
    userId: UUID

    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date
}