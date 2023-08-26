import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { createCategorydto } from "../dto/category.dto";
import { Category } from "../entities/category.entity";


@Injectable()
export class Categoryservice{
    constructor(
        @InjectRepository(Category)
        private categoryRepo: Repository<Category>
    ){}

    async create(createCategorydto:createCategorydto){
        const category = this.categoryRepo.create(createCategorydto);
        await  this.categoryRepo.save(category);
        return category;
    }

    
    //Encontrar un registro
    //findOne(id: number){
        //return this.productRepo.findOneBy({id})
   // }
    //mostrar todos los registros
    findOne (id:number) {
        return  this.categoryRepo. findOne({
            where:{id},
            relations:{
                autor:true,
            }
        })

    }



    findAll(){
        return   this.categoryRepo.find({
            order: {id: 'ASC'},
        });
    }
     //eliminar una marca
     async remove(id:number){
        const Category =await this.findOne(id);
        await this.categoryRepo.remove(Category);
        return 'Category eliminada';
    }

    //actualizar un registro
    async update(id: number, cambios: createCategorydto){
        const oldCategory = await this.findOne(id);
        const updateCategory = await this.categoryRepo.merge(oldCategory, cambios);
        return this.categoryRepo.save(updateCategory);
    }
}