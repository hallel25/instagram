import { UUID } from "crypto"
import { Post } from "src/post/entities/post.entity"
import { User } from "src/user/entities/user.entity"
import { Entity, Column, PrimaryColumn, ManyToMany } from "typeorm"

@Entity()
export class Like {
    @PrimaryColumn()
    id: UUID

    @Column()
    @ManyToMany(() => User, (user) => user.id)
    userId: UUID

    @Column()
    @ManyToMany(() => Post, (post) => post.id)
    postId: UUID

    @Column()
    createdAt: Date
}