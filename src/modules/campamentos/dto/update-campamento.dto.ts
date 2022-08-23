import { IsString } from "class-validator";

export class UpdateCampamentoDto {
    @IsString({
      message: 'El nombre del campamento debe contener solo letras'
    })
    readonly nombre: string;
}