import { Controller, Post, Body, ParseIntPipe, Param, Delete, Get, Patch } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { CreateProductDto } from '../dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsServices: ProductsService) {}

  @Post()
  async create(@Body() productDto: CreateProductDto) {
    return await this.productsServices.create(productDto);
  
  }

 @Get()
 findAll(){
 return this.productsServices.FindAll();
 }
 @Get(':id')
 findOne(@Param('id, ParseIntPipe') id: number){
  return this.productsServices.findOne(id);
 }
 @Delete(':id')
 remove(@Param('id', ParseIntPipe)id: number){
  return this.productsServices.remove(id);
 }
  //EL METODO PACTH ACTUALIZA PARCIALMENTE
   //LOS PIPES SON TRENSFORMADORES, TRASFORMAN LA DATA
@Patch(':id')
update(
  @Param('id, ParseInPipe') id:number,
  @Body() CreateProductDto: CreateProductDto,

){
  return this.productsServices.update(id,CreateProductDto);
}

}


