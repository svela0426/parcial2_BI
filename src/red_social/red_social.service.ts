import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RedsocialEntity } from './red_social.entity';
import { RedsocialDTO } from './red_social.dto';

import { Repository } from 'typeorm';

@Injectable()
export class RedsocialService {
  constructor(
    @InjectRepository(RedsocialEntity)
    private readonly redSocialRepository: Repository<RedsocialEntity>,
  ) {}

  async create(redsocialDTO: RedsocialDTO): Promise<RedsocialEntity> {
    try {
        if (!redsocialDTO.slogan || redsocialDTO.slogan.length < 20) {
            throw new Error('El slogan debe tener al menos 20 caracteres');
        }
        const red = new RedsocialEntity();
        red.nombre = redsocialDTO.nombre;
        red.slogan = redsocialDTO.slogan;
        await this.redSocialRepository.save(red);
        return red;
    } catch (error) {
        throw new Error(`Error al crear el slogan: ${error.message}`);
    }
}

  
}
