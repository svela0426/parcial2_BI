import { UsuarioService } from './usuario.service';
import { UsuarioDTO } from './usuario.dto';

import {
  Controller,
  UseInterceptors,
  Get,
  Param,
  Post,
  HttpCode,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('usuario')
export class UusarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('create')
  @HttpCode(200)
  async create(@Body() usuarioDTO: UsuarioDTO) {
    return await this.usuarioService.create(usuarioDTO);
  }

  @Get(':id_usuario')
    async findOne(@Param('id_usuario') id_usuario: string) {
        return await this.usuarioService.findOne(id_usuario);
    }
    @Get()
    async findAll() {
        return await this.usuarioService.findAll();
    }





}
