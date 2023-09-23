import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { productImage } from './entities/product-image.entity';
import { Category } from './entities/category.entity';
import { CategoryController } from './controllers/category.controller';
import { Categoryservice } from './services/category.service';
import { Proveedor } from './entities/proveedor.entity';
import { ProveedorController } from './controllers/proveedores.controller';
import { Proveedorservice } from './services/proveedores.service';





@Module({
  imports: [TypeOrmModule.forFeature([Product, productImage,Category,Proveedor])],
  controllers: [ProductController,CategoryController,ProveedorController],
  providers: [ProductsService,Categoryservice,Proveedorservice],
})
export class ProductsModule {}
