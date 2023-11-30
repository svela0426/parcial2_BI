import { Injectable } from '@nestjs/common';
import { AlbumEntity } from './album.entity';
import { AlbumDTO } from './album.dto';
import { BusinessLogicException, BusinessError } from '../shared/errors/business-errors';

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
      album.titulo=albumDTO.titulo
      await this.albumRepository.save(album);
      return albumDTO;
    } catch (error) {
      // Manejar el error de manera adecuada (por ejemplo, loguearlo o lanzar una excepción personalizada)
      throw new Error(`Error al crear el album: ${error.message}`);
    }
  }

  async findOne(id: string): Promise<AlbumDTO> {
    const album = await this.albumRepository.findOneBy({"id":id});
    if (!album) 
        throw new BusinessLogicException("The album with the given id was not found", BusinessError.NOT_FOUND)
    else 
        return album;
}





async delete(id: string) {
    const album = await this.albumRepository.findOneBy({"id":id});
    if (!album)
        throw new BusinessLogicException("The album with the given id was not found", BusinessError.NOT_FOUND)
    else 
        return await this.albumRepository.remove(album);
}


}

