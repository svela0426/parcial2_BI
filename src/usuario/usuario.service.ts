import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioDTO } from './usuario.dto';

import { Repository } from 'typeorm';
import { error } from 'console';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async create(usuarioDTO: UsuarioDTO): Promise<UsuarioDTO> {
    try {
      const usuario = new UsuarioEntity();
      usuario.nombre = usuarioDTO.nombre;
      usuario.email = usuarioDTO.email;
      usuario.telefono = usuarioDTO.telefono;
      if (usuario.telefono.length  > 1 && usuario.telefono.length  <11) {
        throw new Error('El valor del tel debe estar entre 100 y 6400');
      }
      await this.usuarioRepository.save(usuario);
      return usuarioDTO;

    } catch (error) {
      throw new Error(`Error al crear el usuario: ${error.message}`);
    }
  }

  async findOne(id: string): Promise<UsuarioEntity> {
    const usuario = await this.usuarioRepository.findOneBy({"id":id});
  
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    } else {
      return usuario;
    }
  }

    async findAll(): Promise<UsuarioDTO[]> {
        return await this.usuarioRepository.find();
    }


}
