import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'user@sad.ru', description: `Почтовый адрес`})
    readonly email: string;
    @ApiProperty({example: '1231131', description: `Пароль`})
    readonly password: string;
}