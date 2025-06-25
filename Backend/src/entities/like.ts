import { UUID } from "crypto"
import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm"
import { Post } from "./post"

@Entity()
export class User {
    @PrimaryColumn()
    id: UUID

    @Column()
    @ManyToOne(() => User, (user) => user.id)
    userId: UUID

    @Column()
    @ManyToOne(() => Post, (post) => post.id)
    postId: UUID

    @Column()
    createAt: Date
}