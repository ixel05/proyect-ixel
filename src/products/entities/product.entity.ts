import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Category } from './category.entity';
import { Proveedor } from './proveedor.entity';
import { productImage } from './product-image.entity';

type NewType = productImage;

@Entity()
export class Product {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  description: string;

  @Column({ type: 'int4', nullable: false })
  price: number;

  @Column({ type: 'int8', nullable: false })
  stock: number;

  @Column({type: 'int4', nullable: false})
  user_id: number;

  //@Column({ type: 'varchar', nullable:true})
  //filename: string;

@CreateDateColumn ({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  created_at: Date;

  @Column({type: 'int4', nullable: false})
  category_id: number;
  


  //relaciones
  @ManyToOne(()=> User)
  @JoinColumn({
    name: 'user_id', //el campo que relaciona a mi tabla
    referencedColumnName: 'id' //este es el id del usuario

  })
  autor: User;

  @ManyToOne(()=> Category)
  @JoinColumn({
    name: 'category_id', //el campo que relaciona a mi tabla
    referencedColumnName: 'id' //este es el id del category

  })
  Category: Category;
   

    @ManyToOne(() => Proveedor)
    @JoinColumn({ 
      name: 'proveedor_id',
      referencedColumnName: 'id'
     })
    proveedor: Proveedor;
  
  @OneToMany(() => productImage, (productImage) => productImage.product, {
      cascade: true,
    })
    images?: NewType[];
   }

  







