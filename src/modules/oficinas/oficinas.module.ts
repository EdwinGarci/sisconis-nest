import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campamento } from '../campamentos/entity/campamento.entity';
import { OficinaController } from './controller/oficina.controller';
import { Oficina } from './entity/oficina.entity';
import { OficinaService } from './service/oficina.service';

@Module({
    imports: [TypeOrmModule.forFeature([Oficina, Campamento])],
    controllers: [OficinaController],
    providers: [OficinaService],
})
export class OficinasModule {}
