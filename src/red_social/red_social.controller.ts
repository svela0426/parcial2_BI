import { Controller, UseInterceptors, Get, Param, Post, HttpCode, Body, Put, Delete } from '@nestjs/common';
import { RedsocialService } from './red_social.service';
import { RedsocialDTO } from './red_social.dto';

@Controller('red')

export class RedsocialController {
    constructor(private readonly fotoService: RedsocialService) { }


    @Post()
    @HttpCode(200)
    async create(@Body() fotoDTO: RedsocialDTO) {
        const nuevafoto=await this.fotoService.create(fotoDTO);
        return nuevafoto;
    }


}
