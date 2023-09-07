import { Controller, Post, UseInterceptors, UploadedFile, BadRequestException, Get } from '@nestjs/common';
import { PdfFilesService } from "../services/pdfFiles.services";
import { FileInterceptor } from "@nestjs/platform-express";
import { fileFilter } from 'src/helpers/fileFilter.helper'; 
import { diskStorage } from "multer";
import { fileNamer } from "src/helpers/fileNamer.helper";
import { pdfFilter } from 'src/helpers/files.Pdf.helper';

@Controller('pdf-Files')
export class pdfFilesController {
    constructor(private readonly FilesService: PdfFilesService) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file',{

     fileFilter:pdfFilter,

      storage: diskStorage({
        destination: './static/filespdf',
        filename: fileNamer,
      }),

    })
    )
    UploadedFile(@UploadedFile() file: Express.Multer.File){
      if (!file){
        throw new BadRequestException ('Asegurarse que el archivo es una imagen pdf ');

      }
      return{
        fileNamer: file. filename,

      };

      }
      
   

}