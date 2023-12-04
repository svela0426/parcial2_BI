import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumEntity } from '../album/album.entity';
import {FotoEntity} from '../foto/foto.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';

export const TypeOrmTestingConfig = () => [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [AlbumEntity, FotoEntity, UsuarioEntity],
    synchronize: true,
    keepConnectionAlive: true 
  }),
  TypeOrmModule.forFeature([AlbumEntity, FotoEntity, UsuarioEntity]),
];