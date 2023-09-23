import { IsArray, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, isString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsNumber()
  id?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  stock: number;

  @IsString()
  @IsOptional()
  filname:string;

 @IsDateString()
 @IsOptional()
 created_at: string;

 @IsNotEmpty()
 @IsNumber()
 user_id: number;

 @IsNotEmpty()
 @IsNumber()
 category_id: number;

 @IsArray({ each: true })
 @IsString()
 @IsOptional()
 images?: string[];



}
