import { Module } from '@nestjs/common';
import { FilesController } from './controller/files.controller';
import { FilesService } from './services/files.services';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
    imports: [TypeOrmModule.forFeature([])],
    controllers: [FilesController],
    providers: [FilesService]
})
export class FilesModule{}