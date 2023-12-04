import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { FotoModule } from './foto/foto.module';
import { AlbumModule } from './album/album.module';
import { RedsocialModule } from './red_social/red_social.module';

import { AlbumEntity } from './album/album.entity';
import { FotoEntity } from './foto/foto.entity';
import { UsuarioEntity } from './usuario/usuario.entity';
import { RedsocialEntity } from './red_social/red_social.entity';



@Module({
  imports: [UsuarioModule,
    FotoModule,
    AlbumModule,
    RedsocialModule,
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'millos2011',
    database: 'postgres',
    entities: [AlbumEntity, FotoEntity, UsuarioEntity,RedsocialEntity],
    dropSchema: true,
    synchronize: true,
    keepConnectionAlive: true,
    migrations: [__dirname + '/migration/**/*{.ts,.js}'],
    migrationsRun: false,
    logging: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
