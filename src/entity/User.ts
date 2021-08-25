import {
    Entity,
    Column,
    PrimaryColumn,
    BeforeInsert,
    BaseEntity
} from 'typeorm';

import { v4 as uuidv4} from "uuid";

@Entity("users")

export class User extends BaseEntity{
    @PrimaryColumn("uuid") id: string;
    
    @Column("varchar", {length: 255}) name: string;
    
    @Column("varchar", { length: 255}) email: string;

    @Column("varchar", { length: 255}) password: string;


    @BeforeInsert()
    addId() {
        this.id = uuidv4();
    }
    
}