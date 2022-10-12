import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString({
        message: 'El nombre de la oficina debe contener solo letras'
    })
    @IsNotEmpty({
        message: 'El nombre de la oficina no puede estar vacío'
    })
    readonly nombres: string;
}