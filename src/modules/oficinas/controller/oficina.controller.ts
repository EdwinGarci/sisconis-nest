import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateOficinaDto, UpdateOficinaDto } from '../dto';
import { Oficina } from '../entity/oficina.entity';
import { OficinaService } from '../service/oficina.service';

@Controller('oficina')
export class OficinaController {
    constructor(private readonly oficinaService: OficinaService){

    }

    @Get()
    getOficinas(): Promise<Oficina[]> {
        return this.oficinaService.getOficinas();
    }

    @Get('id')
    async getOficina(@Param('id') id: number ): Promise<Oficina[]>{
        return this.oficinaService.getOficina(id);
    }

    @Post()
    //@HttpCode(HttpStatus.NO_CONTENT)  //Cambiar codigo de estado
    createOficina(@Body() createOficina: CreateOficinaDto): Promise<Oficina> {
        return this.oficinaService.createOficina(createOficina);
    }

    @Patch(':id')
    updateOficina(@Param('id') id: number, @Body() oficina: UpdateOficinaDto): Promise<Oficina> {
        return this.oficinaService.updateOficina(id, oficina);
    }

    @Delete(':id')
    deleteOficina(@Param('id') id: number): Promise<Object> {
        return this.oficinaService.deleteOficina(id);
    }
}
