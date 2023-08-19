import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dto/product.dto';


@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = this.productRepo.create(createProductDto);
    await this.productRepo.save(product);

    return product;
  }
  //encontrar un registro
  findOne(id: number){
    return this.productRepo.findOneBy({ id });

    
  }
  //Mostrar todos los registros
  FindAll(){
    return this.productRepo.find({
      order: { id: 'ASC'},

    });

  }

  //ELIMINAR UN REGISTRO
  async remove(id: number){
    const product =await this.findOne(id);
    await this.productRepo.remove(product);
    return 'producto eliminado satisfactoriamente';

  }

  //ACTUALIZAR UN PRODUCTO
  async update(id:number,cambios: CreateProductDto){
    const oldProduct =await this.findOne(id);
    const updatedproduct =await this.productRepo.merge(oldProduct,cambios);
    return this.productRepo.save(updatedproduct);
  }

  async delete(id: number) {
    // const product = await this.productRepo.findOne(id)
  
  }

}
