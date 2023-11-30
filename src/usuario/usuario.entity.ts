import {Column,Entity,OneToMany,PrimaryGeneratedColumn} from 'typeorm';

import { AlbumEntity } from 'src/album/album.entity';

@Entity()
export class UsuarioEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  email: string;

  @Column()
  telefono: string;


  @OneToMany(() => AlbumEntity, (album) => album.usuario)
  albums: AlbumEntity[];
  static user: any;

}
