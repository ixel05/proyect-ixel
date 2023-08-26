import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Marca } from './marca.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Modelo {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'int4' })
  marca_id?: number;

  @Column({ type: 'varchar', length: 60, nullable: false })
  nombre: string;

  @Column({ type: 'int8', nullable: false })
  user_id: number;

 
  @ManyToOne(()=> Marca)
  @JoinColumn({
   name: 'marca_id', 
   referencedColumnName: 'id' 

  })
  marca: Marca;

  @ManyToOne(()=> User)
  @JoinColumn({
    name: 'user_id', 
    referencedColumnName: 'id' 
  })
  autor: User;


}
