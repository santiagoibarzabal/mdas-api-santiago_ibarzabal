import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

class CreateUserDTO {
  @IsNumber()
  @IsNotEmpty()
  id!: number;

  @IsString()
  @IsNotEmpty()
  name!: string;
}

export default CreateUserDTO;
