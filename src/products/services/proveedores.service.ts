import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { createCategorydto } from "../dto/category.dto";
import { Category } from "../entities/category.entity";
import { Proveedor } from "../entities/proveedor.entity";
import { createProveedordto } from "../dto/proveedor.dto";


@Injectable()
export class Proveedorservice{
    
    constructor(
        @InjectRepository(Proveedor)
        private proveedorRepo: Repository<Proveedor>
    ){}

    async create(createProveedordto:createProveedordto){
        const proveedor = this.proveedorRepo.create(createProveedordto);
        await  this.proveedorRepo.save(proveedor);
        return proveedor;
    }

    
    //Encontrar un registro
    //findOne(id: number){
        //return this.productRepo.findOneBy({id})
   // }
    //mostrar todos los registros
    findOne (id:number) {
        return  this.proveedorRepo. findOne({
            where:{id},
            relations:{
                autor:true,
            }
        })

    }



    findAll(){
        return   this.proveedorRepo.find({
            order: {id: 'ASC'},
        });
    }
     //eliminar una marca
     async remove(id:number){
        const proveedor =await this.findOne(id);
        await this.proveedorRepo.remove(proveedor);
        return 'proveedor eliminada';
    }

    //actualizar un registro
    async update(id: number, cambios: createProveedordto){
        const oldProveedor = await this.findOne(id);
        const updateProveedor = await this.proveedorRepo.merge(oldProveedor, cambios);
        return this.proveedorRepo.save(updateProveedor);
    }
}