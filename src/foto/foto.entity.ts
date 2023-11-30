
import {
  Column,
  Entity,
  OneToMany,
  ManyToMany,
  PrimaryGeneratedColumn,
  JoinTable,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity()
export class FotoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  iso: number;

  @Column()
  velObturacion: number;

  @Column()
  apertura: number;

  @Column()
  fecha: Date;

}
