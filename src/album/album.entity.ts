
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
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { type } from 'os';
import {FotoEntity} from 'src/foto/foto.entity';

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

  @ManyToOne(() => UsuarioEntity, (usuario) => usuario.albums)
  usuario: UsuarioEntity;

  @OneToMany(type => FotoEntity, foto => foto.album, { cascade: true, eager: true }) 
  fotos: FotoEntity[];
}


