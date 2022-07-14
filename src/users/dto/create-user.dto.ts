// schema representation of whatever project you want to use intermediary to transfer info
//dto => data transfer object
/*eslint-disable */
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    name: string;
}
