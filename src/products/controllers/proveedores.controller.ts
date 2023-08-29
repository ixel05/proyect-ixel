import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, } from '@nestjs/common';
import { createCategorydto } from '../dto/category.dto';
import { Proveedorservice } from '../services/proveedores.service';
import { createProveedordto } from '../dto/proveedor.dto';


@Controller('Proveedor')
export class ProveedorController
{
   
    constructor(private readonly Proveedorservice:Proveedorservice){}
        @Post()
        async CreateProveedor(@Body() createProveedordto: createProveedordto){
            return this.Proveedorservice.create(createProveedordto);
        }
        
    @Get()
    findAll(){
        return this.Proveedorservice.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id', ParseIntPipe)id: number){
        return this.Proveedorservice.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
        return this.Proveedorservice.remove(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe)id: number,
        @Body()createProveedordto :createProveedordto,
        
    )
    {
        return this.Proveedorservice.update(id, createProveedordto)
    }
}

    