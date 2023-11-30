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

  async create(fotoDTO: FotoDTO): Promise<FotoDTO> {
    try {
      const foto = new FotoEntity();
      foto.iso = fotoDTO.iso;
      foto.velObturacion = fotoDTO.velObturacion;
      foto.apertura = fotoDTO.apertura;

      // Validar ISO
      if (foto.iso < 100 || foto.iso > 6400) {
        throw new Error('El valor del ISO debe estar entre 100 y 6400');
      }

      // Validar valObturación
      if (foto.velObturacion < 2 || foto.velObturacion > 250) {
        throw new Error('El valor de la velocidad de obturación debe estar entre 2 y 250');
      }

      // Validar apertura
      if (foto.apertura < 1 || foto.apertura > 32) {
        throw new Error('El valor de la apertura debe estar entre 1 y 32');
      }

      // Validar que máximo dos valores estén por encima del valor medio
      const valores = [foto.iso, foto.velObturacion, foto.apertura];
      const valoresSuperiores = valores.filter((valor) => valor > (valores.reduce((acc, valor) => acc + valor) / valores.length));

      if (valoresSuperiores.length > 2) {
        throw new Error('Máximo dos valores pueden estar por encima del valor medio');
      }

      await this.fotoRepository.save(foto);
      return fotoDTO;
    } catch (error) {
      // Manejar el error de manera adecuada (por ejemplo, loguearlo o lanzar una excepción personalizada)
      throw new Error(`Error al crear el deporte: ${error.message}`);
    }
  }

  async findOne(id: string): Promise<FotoDTO> {
    const foto = await this.fotoRepository.findOneBy({"id":id});
  
    if (!foto) {
      throw new Error('foro no encontrado');
    } else {
      return foto;
    }
  }

    async findAll(): Promise<FotoDTO[]> {
        return await this.fotoRepository.find();
    }

    async delete(id: string) {
        const foto = await this.fotoRepository.findOneBy({"id":id});
        if (!foto)
        throw new Error('foto no encontrado');
        else 
            return await this.fotoRepository.remove(foto);
    }




}





