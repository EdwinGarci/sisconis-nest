import { Campamento } from "src/modules/campamentos/entity/campamento.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Oficina{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    nombre: string;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;
    
    @UpdateDateColumn()
    deleted_at: Date;

    @ManyToOne(() => Campamento, (campamento) => campamento.campamentoToOficina)
    campamento: Campamento;
}