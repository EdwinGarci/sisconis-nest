import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampamentoController } from './controller/campamento.controller';
import { Campamento } from './entity/campamento.entity';
import { CampamentoService } from './service/campamento.service';

@Module({
    imports: [TypeOrmModule.forFeature([Campamento])],
    controllers: [CampamentoController],
    providers: [CampamentoService],
})
export class CampamentosModule {}
