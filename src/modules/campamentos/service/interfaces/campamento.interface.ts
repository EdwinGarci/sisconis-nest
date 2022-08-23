import { CreateCampamentoDto, UpdateCampamentoDto } from "../../dto";
import { Campamento } from "../../entity/campamento.entity";


export interface CampamentoInterface {
    getCampamentos(): Promise<Campamento[]>;
    getCampamento(id: number): Promise<Campamento[]>;
    createCampamento({ nombre }: CreateCampamentoDto);
    deleteCampamento(id: number): Promise<Object>;
    updateCampamento(id: number, { nombre }: UpdateCampamentoDto);
}