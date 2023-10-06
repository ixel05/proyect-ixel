import { BadRequestException, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { fileFilter } from "src/helpers/fileFilter.helper";
import { fileNamer } from "src/helpers/fileNamer.helper";
import { FilesService } from "../services/files.services";
import { Response } from "express";

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    fileFilter:fileFilter,

    storage: diskStorage({
      destination: './static/products/',
      filename:fileNamer
    })
  
  }))


  UploadImage(@UploadedFile() file: Express.Multer.File) {
   if (!file){
      throw new BadRequestException('Asegurese que el archivo es una imagen')
    }

    const url = `${file.filename}`;


    return {url};


  }

  @Get('products/:imageName')
  findProduct(@Res() res: Response, @Param('imageName') imageName: string) {
    const path = this.filesService.getStaticImageName(imageName);

    res.sendFile(path);
  }
  
  @Get('user/:imageName')
  findUser(@Res() res:Response, @Param('imageName') imageName: string){
      const path = this.filesService.getStaticImageName(imageName);

      //return path;
      res.sendFile(path);
  }


}   
