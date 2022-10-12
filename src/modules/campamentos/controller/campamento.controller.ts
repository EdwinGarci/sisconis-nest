import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateCampamentoDto } from '../dto/create-campamento.dto';
import { UpdateCampamentoDto } from '../dto/update-campamento.dto';
import { Campamento } from '../entity/campamento.entity';
import { CampamentoService } from '../service/campamento.service';

@Controller('campamento')
export class CampamentoController {
    constructor(private readonly campamentoService: CampamentoService) {

    }

    //Todos los campamentos
    @Get()
    getCampamentos(): Promise<Campamento[]> {
        return this.campamentoService.getCampamentos();
    }

    @Get(':id')
    async getCampamento(@Param('id') id: number): Promise<Campamento[]> {
        return this.campamentoService.getCampamento(id);
    }

    @Post()
    //@HttpCode(HttpStatus.NO_CONTENT) - Cambiar codigo de estado
    createCampamento(@Body() message: CreateCampamentoDto): Promise<Campamento> {
        return this.campamentoService.createCampamento(message);
    }

    @Patch(':id')
    updateCampamento(@Param ('id') id: number, @Body() campamento: UpdateCampamentoDto): Promise<Campamento> {
        return this.campamentoService.updateCampamento(id, campamento);
    }

    @Delete(':id')
    deleteCampamento(@Param ('id') id: number): Promise<Object> {
        return this.campamentoService.deleteCampamento(id);
    }
}
