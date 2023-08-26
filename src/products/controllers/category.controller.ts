import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, } from '@nestjs/common';
import { createCategorydto } from '../dto/category.dto';
import { Categoryservice } from '../services/category.service';

@Controller('Category')
export class CategoryController
{
   
    constructor(private readonly Categoryservice:Categoryservice){}
        @Post()
        async CreateCategory(@Body() createCategorydto: createCategorydto){
            return this.Categoryservice.create(createCategorydto);
        }
        
    @Get()
    findAll(){
        return this.Categoryservice.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id', ParseIntPipe)id: number){
        return this.Categoryservice.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
        return this.Categoryservice.remove(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe)id: number,
        @Body()createCategorydto :createCategorydto,
        
    )
    {
        return this.Categoryservice.update(id, createCategorydto)
    }
}

    