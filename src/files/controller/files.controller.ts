import { BadRequestException, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FilesService } from '../services/files.services';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from 'src/helpers/fileFilter.helper';
import { diskStorage } from 'multer';
import { fileNamer } from 'src/helpers/fileNamer.helper';




@Controller('files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}

 
@Post('upload')
@UseInterceptors(FileInterceptor('file',{
  //llamamos a nuestro fileFilter de multer y le asignemos nuestro helpers
  fileFilter:  fileFilter,
   
  storage: diskStorage({
   destination: './static/products',
   filename: fileNamer,

  }),

}),
)
uploadFile(@UploadedFile() file: Express.Multer.File) {
  if (!file) {
    throw new BadRequestException('Asegurese que el archivo es una imagen');

  }


return {
   fileName: file.filename,
};
}
}


