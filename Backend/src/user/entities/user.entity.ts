import { UUID } from "crypto"
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: UUID

    @Column()
    name: string

    @Column()
    email: string
}