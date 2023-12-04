import { Injectable } from '@nestjs/common';
import { AlbumEntity } from './album.entity';
import { AlbumDTO } from './album.dto';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FotoEntity } from '../foto/foto.entity';
import { FotoService } from 'src/foto/foto.service';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(AlbumEntity)
    private readonly albumRepository: Repository<AlbumEntity>,
    @InjectRepository(FotoEntity)
    private readonly fotoRepository: Repository<FotoEntity>,

  ) {}

  async create(albumDTO: AlbumDTO): Promise<AlbumEntity> {
    try {
      const album = new AlbumEntity();
      album.fecha_inicio = albumDTO.fecha_inicio;
      album.fecha_fin=albumDTO.fecha_fin
      album.titulo=albumDTO.titulo;
        if (album.titulo.length === 0) {
        throw new Error('El título no puede estar vacío');
      }
      await this.albumRepository.save(album);
      return album;
    } catch (error) {
      throw new Error(`Error al crear el album: ${error.message}`);
    }
  }




  async addPhotoToAlbum(id_foto: string, id_album): Promise<AlbumDTO> {
    const foto = await this.fotoRepository.findOneBy({ "id": id_foto });
  
    if (!foto) {
      throw new Error('Foto no encontrada');
    }
  
    const album = await this.albumRepository.findOneBy({ "id": id_album });
  
    if (foto.fecha >= album.fecha_inicio && foto.fecha <= album.fecha_fin) {
      album.fotos.push(foto);
      await this.albumRepository.save(album);
      return album;
    } else {
      throw new Error('La fecha de la foto no está dentro del rango del álbum');
    }
  }
  

  async findOne(id: string): Promise<AlbumEntity> {
    const album = await this.albumRepository.findOneBy({"id":id});
    if (!album) 
            throw new Error('album no encontrado');
    else 
        return album;
}

async findAll(): Promise<AlbumDTO[]> {
  return await this.albumRepository.find();
}


async delete(id: string) {
    const album = await this.albumRepository.findOneBy({"id":id});
    if (!album)
         throw new Error('album no encontrado');
    else 
        return await this.albumRepository.remove(album);
}


}

