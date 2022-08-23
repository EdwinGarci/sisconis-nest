import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nombres: string;

    @Column()
    apellidos: string;

    @Column()
    usuario: string;

    @Column()
    password: string;

    @Column()
    dni: string;

    @Column()
    created_at: Date;
    
    @Column()
    updated_at: Date;
    
    @Column()
    deleted_at: Date;
}