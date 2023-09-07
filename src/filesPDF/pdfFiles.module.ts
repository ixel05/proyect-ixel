import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PdfFilesService } from './services/pdfFiles.services';
import { pdfFilesController } from './controller/pdfFiles.controller';


@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [pdfFilesController],
  providers: [PdfFilesService],
})
export class FilesPdfModule {}