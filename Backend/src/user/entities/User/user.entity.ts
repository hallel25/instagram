import { UUID } from "crypto"
import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryColumn()
    id: UUID

    @Column()
    name: string

    @Column()
    email: string
}