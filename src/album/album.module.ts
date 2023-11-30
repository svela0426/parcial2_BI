import { Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import { AlbumEntity } from './album.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FotoEntity } from 'src/foto/foto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AlbumEntity,FotoEntity])],
  controllers: [AlbumController],
  providers: [AlbumService]
})
export class AlbumModule { }
