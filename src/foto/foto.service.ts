import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FotoEntity } from './foto.entity';
import { FotoDTO } from './foto.dto';
import { Repository } from 'typeorm';

@Injectable()
export class FotoService {
  constructor(
    @InjectRepository(FotoEntity)
    private readonly fotoRepository: Repository<FotoEntity>
  ) {}

  async createFoto(fotoDTO: FotoDTO): Promise<FotoEntity> {
    try {
      const foto = new FotoEntity();
      foto.iso = fotoDTO.iso;
      foto.velObturacion = fotoDTO.velObturacion;
      foto.apertura = fotoDTO.apertura;
      foto.fecha=fotoDTO.fecha

      if (foto.iso < 100 || foto.iso > 6400) {
        throw new Error('El valor del ISO debe estar entre 100 y 6400');
      }

      if (foto.velObturacion < 2 || foto.velObturacion > 250) {
        throw new Error('El valor de la velocidad de obturación debe estar entre 2 y 250');
      }

      if (foto.apertura < 1 || foto.apertura > 32) {
        throw new Error('El valor de la apertura debe estar entre 1 y 32');
      }

      const valores = [foto.iso, foto.velObturacion, foto.apertura];
      const valoresSuperiores = valores.filter((valor) => valor > (valores.reduce((acc, valor) => acc + valor) / valores.length));

      if (valoresSuperiores.length > 2) {
        throw new Error('Máximo dos valores pueden estar por encima del valor medio');
      }

      await this.fotoRepository.save(foto);
      return foto;
    } catch (error) {
      throw new Error(`Error al crear el deporte: ${error.message}`);
    }
  }

  async findFotoByID(id: string): Promise<FotoEntity> {
    const foto = await this.fotoRepository.findOne({where:{id}});
  
    if (!foto) {
      throw new Error('foro no encontrado');
    } else {
      return foto;
    }
  }

    async findAllFotos(): Promise<FotoDTO[]> {
        return await this.fotoRepository.find();
    }

    async deleteFoto(id: string) {
        const foto = await this.fotoRepository.findOne({where:{id}});
        if (!foto)
        throw new Error('foto no encontrado');
        else 
            return await this.fotoRepository.remove(foto);
    }




}



