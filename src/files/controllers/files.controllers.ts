import { Controller, Post } from '@nestjs/common';
import { FilesService } from "../services/files.services";


@Controller('Files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}

    @Post("products")
    UploadImage(){
      return'Hola Mundo';  
    }

}