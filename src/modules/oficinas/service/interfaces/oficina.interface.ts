import { CreateOficinaDto, UpdateOficinaDto } from "../../dto";
import { Oficina } from "../../entity/oficina.entity";

export interface OficinaInterface {
    getOficinas(): Promise<Oficina[]>;
    getOficina(id: number): Promise<Oficina[]>; 
    createOficina({ nombre, id_campamento }: CreateOficinaDto);
    deleteOficina(id: number): Promise<Object>;
    updateOficina(id: number, { nombre, id_campamento }: UpdateOficinaDto);
}