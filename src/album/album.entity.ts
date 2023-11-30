
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
}

