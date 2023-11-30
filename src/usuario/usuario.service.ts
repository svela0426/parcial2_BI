import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioDTO } from './usuario.dto';

import { Repository } from 'typeorm';
import { error } from 'console';

@Injectable()
export class SportService {
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
      await this.usuarioRepository.save(usuario);
      return usuarioDTO;
    } catch (error) {
      // Manejar el error de manera adecuada (por ejemplo, loguearlo o lanzar una excepción personalizada)
      throw new Error(`Error al crear el deporte: ${error.message}`);
    }
  }

  async findOne(id: string): Promise<UsuarioDTO> {
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
