import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RedsocialEntity } from './red_social.entity';
import { RedsocialDTO } from './red_social.dto';

import { Repository } from 'typeorm';

@Injectable()
export class SportService {
  constructor(
    @InjectRepository(RedsocialEntity)
    private readonly redSocialRepository: Repository<RedsocialEntity>,
  ) {}

  async create(redsocialDTO: RedsocialDTO): Promise<RedsocialDTO> {
    try {
      const red = new RedsocialEntity();
      red.nombre = RedsocialDTO.nombre;
      await this.redSocialRepository.save(red);
      return redsocialDTO;
    } catch (error) {
      // Manejar el error de manera adecuada (por ejemplo, loguearlo o lanzar una excepción personalizada)
      throw new Error(`Error al crear el deporte: ${error.message}`);
    }
  }
}
