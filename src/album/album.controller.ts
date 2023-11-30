import { Controller, UseInterceptors, Get, Param, Post, HttpCode, Body, Put, Delete } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumDTO } from './album.dto';

@Controller('album')

export class AlbumController {
    constructor(private readonly albumService: AlbumService) { }

    @Get(':fotoId')
    async findOneBy(@Param('fotoId') fotoId: string) {
        return await this.albumService.findOne(fotoId);
    }

    @Post()
    @HttpCode(200)
    async create(@Body() fotoDTO: AlbumDTO) {
        return await this.albumService.create(fotoDTO);
    }
    @Put('agregar-foto-a-album/:id_foto/:id_album')
    async agregarFotoAAbum(
      @Param('id_foto') idFoto: string,
      @Param('id_album') idAlbum: string,
    ) {
      try {
        const album = await this.albumService.addPhotoToAlbum(idFoto, idAlbum);
        return { success: true, data: album };
      } catch (error) {
        return { success: false, error: error.message };
      }
    }


    @Get()
    async findAll() {
        return await this.albumService.findAll();
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
        return await this.albumService.delete(id)
    }


}
