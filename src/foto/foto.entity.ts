
import {
  Column,
  Entity,
  OneToMany,
  ManyToMany,
  PrimaryGeneratedColumn,
  JoinTable,
  JoinColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';

import {AlbumEntity} from 'src/album/album.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';

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

  @ManyToOne(type => AlbumEntity, album => album.fotos) // Many to one relationship
  album: AlbumEntity;

  @ManyToOne(() => UsuarioEntity, (usuario) => usuario.albums)
  usuario: UsuarioEntity;

}
