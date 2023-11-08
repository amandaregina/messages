import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateMessageDto {
    @ApiProperty({
     description: 'O content é usado para registrar uma mensagem',
     example: 'EU TO LOUCO? EU SO LOUCO?'
    })
    @IsString()
    content: string;
}