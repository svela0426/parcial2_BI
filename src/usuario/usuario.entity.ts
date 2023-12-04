import {Column,Entity,OneToMany,PrimaryGeneratedColumn} from 'typeorm';

import { AlbumEntity } from '../album/album.entity';
import { FotoEntity } from '../foto/foto.entity';

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

  @OneToMany(() => FotoEntity, (foto) => foto.usuario)
  fotos: FotoEntity[];
  

}
