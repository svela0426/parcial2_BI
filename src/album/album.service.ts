import { Injectable } from '@nestjs/common';
import { AlbumEntity } from './album.entity';
import { AlbumDTO } from './album.dto';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(AlbumEntity)
    private readonly albumRepository: Repository<AlbumEntity>
  ) {}

  async create(albumDTO: AlbumDTO): Promise<AlbumDTO> {
    try {
      const album = new AlbumEntity();
      album.fecha_inicio = albumDTO.fecha_inicio;
      album.fecha_fin=albumDTO.fecha_fin
      album.titulo=albumDTO.titulo;
        if (album.titulo.length === 0) {
        throw new Error('El título no puede estar vacío');
      }
      await this.albumRepository.save(album);
      return albumDTO;
    } catch (error) {
      throw new Error(`Error al crear el album: ${error.message}`);
    }
  }

  async findOne(id: string): Promise<AlbumDTO> {
    const album = await this.albumRepository.findOneBy({"id":id});
    if (!album) 
            throw new Error('album no encontrado');
    else 
        return album;
}


async delete(id: string) {
    const album = await this.albumRepository.findOneBy({"id":id});
    if (!album)
         throw new Error('album no encontrado');
    else 
        return await this.albumRepository.remove(album);
}


}

