import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './config/database/database.module';
import { CampamentoController } from './modules/campamentos/controller/campamento.controller';
import { CampamentoService } from './modules/campamentos/service/campamento.service';
import { OficinaController } from './modules/oficinas/controller/oficina.controller';
import { OficinaService } from './modules/oficinas/service/oficina.service';

@Module({
  imports: [TypeOrmModule.forRoot({}), DatabaseModule],
  controllers: [CampamentoController, OficinaController],
  providers: [CampamentoService, OficinaService],
})
export class AppModule {}
