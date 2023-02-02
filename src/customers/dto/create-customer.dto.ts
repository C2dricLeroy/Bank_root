import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";


export class CreateCustomers {
    @ApiProperty()
    @IsNotEmpty({message: 'The User should have a firstName'})
    @Length(3, 50)
    @IsString()
    Firstname: string;

    @ApiProperty()
    @IsNotEmpty({message : 'The user should have a lastName'})
    @IsString()
    @Length(3, 50)
    Lastname: string;

    @ApiProperty()
    @IsNotEmpty({message : 'The User should have a password'})
    @IsString()
    @Length(8)
    Password: string;

    @ApiProperty()
    @IsNotEmpty({message : 'The user should have a userName'})
    @IsString()
    @Length(3, 50)
    Username: string;

}
