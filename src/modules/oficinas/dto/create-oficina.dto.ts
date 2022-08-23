import { IsInt, IsString } from "class-validator";

export class CreateOficinaDto {
    @IsString({
        message: 'El nombre de la oficina debe contener solo letras'
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