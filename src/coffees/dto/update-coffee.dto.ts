import { PartialType } from '@nestjs/mapped-types'; // marks all fields as optional
import { CreateCoffeeDto } from './create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {

}
