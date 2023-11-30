
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
import { UsuarioEntity } from 'src/usuario/usuario.entity';

@Entity()
export class AlbumEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fecha_inicio: Date;

  @Column()
  fecha_fin: Date;

  @Column()
  titulo: string;
  usuario: any;


  @ManyToOne(type = UsuarioEntity, usuario => usuario.albums)
  usuario: UsuarioEntity;
}

