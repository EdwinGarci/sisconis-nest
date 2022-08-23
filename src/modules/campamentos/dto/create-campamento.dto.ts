import { IsString } from "class-validator";

export class CreateCampamentoDto {
    @IsString({
      message: 'El nombre del campamento debe contener solo letras'
    })
    readonly nombre: string;
}