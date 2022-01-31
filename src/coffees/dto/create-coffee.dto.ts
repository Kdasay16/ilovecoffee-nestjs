import { IsString } from 'class-validator'

// dto: Data Transfer Object
// lets us shape the data
export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: string[];
}
