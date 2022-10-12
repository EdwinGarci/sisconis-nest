import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Campamento } from 'src/modules/campamentos/entity/campamento.entity';
import { Repository } from 'typeorm';
import { CreateOficinaDto, UpdateOficinaDto } from '../dto';
import { Oficina } from '../entity/oficina.entity';
import { OficinaInterface } from './interfaces/oficina.interface';

@Injectable()
export class OficinaService implements OficinaInterface {
    constructor(
        @InjectRepository(Campamento) private readonly campamentoRepository: Repository<Campamento>,
        @InjectRepository(Oficina) private readonly oficinaRepository: Repository<Oficina>,
    ) {}

    async getOficinas(): Promise<Oficina[]> {
        const oficina = await this.oficinaRepository.find({ relations: { campamento: true }, withDeleted: true });

        //Mensaje para cuando salga mal la consulta
        if (!oficina) throw new NotFoundException("Algo salió mal.");

        //Mensaje para cuando no se encuentren registros
        if (oficina && oficina.length == 0) throw new HttpException({
            status: HttpStatus.ACCEPTED,
            error: 'No hay oficinas para mostrar.',
        }, HttpStatus.ACCEPTED)

        return oficina;
    }

    async getOficina(id: number): Promise<Oficina[]> {
        const oficina = await this.oficinaRepository.find({where: {id: id},});
        if(!oficina) throw new NotFoundException("Algo salió mal");
        if(oficina && oficina.length == 0) throw new HttpException({
            status: HttpStatus.ACCEPTED,
            error: 'No hay oficina para mostrar.',
        }, HttpStatus.ACCEPTED)
        
        return oficina;
    }

    async createOficina({ nombre, id_campamento }: CreateOficinaDto) {
        const campamento = await this.campamentoRepository.findOne({ where: { id: id_campamento } });
        const newOficina = this.oficinaRepository.create({ nombre, campamento });
        return this.oficinaRepository.save(newOficina);
    }

    async updateOficina(id: number, { nombre, id_campamento }: UpdateOficinaDto) {
        const campamento = await this.campamentoRepository.findOne({ where: { id: id_campamento } });
        const oficina: Oficina = await this.oficinaRepository.preload({
            id, nombre, campamento
        });

        if (!oficina) {
            throw new NotFoundException('Registro de oficina no encontrado.')
        }

        this.oficinaRepository.save(oficina);

        return oficina;
    }

    async deleteOficina(id: number): Promise<Object> {
        const deleteResponse = await this.oficinaRepository.softDelete(id);
        if (!deleteResponse.affected) {
            throw new NotFoundException('Registro de oficina no encontrado.');
        }

        return {
            status: HttpStatus.ACCEPTED,
            msg: 'Registro de oficina eliminado exitosamente.',
        }
    }
}
