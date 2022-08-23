import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCampamentoDto } from '../dto/create-campamento.dto';
import { UpdateCampamentoDto } from '../dto/update-campamento.dto';
import { Campamento } from '../entity/campamento.entity';
import { CampamentoInterface } from './interfaces/campamento.interface';

@Injectable()
export class CampamentoService implements CampamentoInterface {

    constructor(
        @InjectRepository(Campamento) private readonly campamentoRepository: Repository<Campamento>,
    ) { }
    
    //Todos los campamentos
    async getCampamentos(): Promise<Campamento[]> {
        const campamentos = await this.campamentoRepository.find();

        //Mensaje para cuando salga mal la consulta
        if (!campamentos) throw new NotFoundException("Algo salió mal.");

        //Mensaje para cuando no se encuentren registros
        if (campamentos && campamentos.length == 0) throw new HttpException({
            status: HttpStatus.ACCEPTED,
            error: 'No hay vacunaciones para mostrar.',
        }, HttpStatus.ACCEPTED)

        return campamentos;
    }

    async getCampamento(id: number): Promise<Campamento[]> {
        const campamento = await this.campamentoRepository.find({ where: { id: id },});
        if(!campamento) throw new NotFoundException("Algo salió mal");
        if (campamento && campamento.length == 0) throw new HttpException({
            status: HttpStatus.ACCEPTED,
            error: 'No hay campamentos para mostrar.',
        }, HttpStatus.ACCEPTED)
        
        return campamento;
    }

    async createCampamento({ nombre }: CreateCampamentoDto) {
        const campamento = this.campamentoRepository.create({ nombre });
        return this.campamentoRepository.save(campamento);
    }

    async updateCampamento(id: number, { nombre }: UpdateCampamentoDto) {
        const campamento: Campamento = await this.campamentoRepository.preload({
            id, nombre
        });

        if (!campamento) {
            throw new NotFoundException('Recurso no encontrado')
        }

        this.campamentoRepository.save(campamento);
        return campamento;
    }

    async deleteCampamento(id: number): Promise<Object> {
        const deleteResponse = await this.campamentoRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException('Registro de campamento no encontrado.');
        }

        return {
            status: HttpStatus.ACCEPTED,
            msg: 'Registro de campamento eliminado exitosamente.',
        }
    }
}
