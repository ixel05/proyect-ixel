import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { productImage } from './entities/product-image.entity';
import { Category } from './entities/category.entity';
import { CategoryController } from './controllers/category.controller';
import { Categoryservice } from './services/category.service';




@Module({
  imports: [TypeOrmModule.forFeature([Product, productImage,Category])],
  controllers: [ProductController,CategoryController],
  providers: [ProductsService,Categoryservice],
})
export class ProductsModule {}
