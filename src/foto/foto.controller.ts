import { Controller, UseInterceptors, Get, Param, Post, HttpCode, Body, Put, Delete } from '@nestjs/common';
import { FotoService } from './foto.service';
import { FotoDTO } from './foto.dto';

@Controller('foto')

export class FotoController {
    constructor(private readonly fotoService: FotoService) { }

    @Get()
    async findAll() {
        return await this.fotoService.findAllFotos();
    }

    @Get(':fotoId')
    async findOneBy(@Param('fotoId') fotoId: string) {
        return await this.fotoService.findFotoByID(fotoId);
    }

    @Post()
    @HttpCode(200)
    async create(@Body() fotoDTO: FotoDTO) {
        return await this.fotoService.createFoto(fotoDTO);
    }


}
