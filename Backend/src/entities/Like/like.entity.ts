import { UUID } from "crypto"
import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm"
import { Post } from "../Post/post.entity"
import { User } from "../User/user.entity"

@Entity()
export class Like {
    @PrimaryColumn()
    id: UUID

    @Column()
    @ManyToOne(() => User, (user) => user.id)
    userId: UUID

    @Column()
    @ManyToOne(() => Post, (post) => post.id)
    postId: UUID

    @Column()
    createdAt: Date
}