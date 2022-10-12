import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class UpdateOficinaDto {
    @IsString({
        message: 'El nombre de la oficina debe contener solo letras'
    })
    @IsNotEmpty({
        message: 'El nombre de la oficina no puede estar vacío'
    })
    readonly nombre: string;

    //@Validate(CampamentoExistsRule)
    @IsInt(
        {
            message: 'Debe ingresar un campamento'
        }
    )
    readonly id_campamento: number;
}