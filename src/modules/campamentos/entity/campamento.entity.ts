import { Oficina } from "src/modules/oficinas/entity/oficina.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Campamento{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    nombre: string;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;
    
    @DeleteDateColumn()
    deleted_at: Date;

    @OneToMany(() => Oficina, campamentoToOficina => campamentoToOficina.campamento)
    campamentoToOficina: Oficina[];
}