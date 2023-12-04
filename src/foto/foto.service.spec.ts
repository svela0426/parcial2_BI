import { Test, TestingModule } from '@nestjs/testing';
import { FotoService } from './foto.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { FotoDTO } from './foto.dto';
import { TypeOrmTestingConfig } from '../shared/typeorm-testing-config';

import { InjectRepository } from '@nestjs/typeorm';
import { FotoEntity } from './foto.entity';
import { Repository } from 'typeorm';
import { AlbumEntity } from 'src/album/album.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';

  
  describe('FotoService', () => {
    let fotoService: FotoService;
    let fotoRepository: Repository<FotoEntity>;
    let fotosList: FotoEntity[];
  
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [...TypeOrmTestingConfig()],
            providers: [FotoService],
          }).compile();
  
      fotoService = module.get<FotoService>(FotoService);
      fotoRepository = module.get<Repository<FotoEntity>>(getRepositoryToken(FotoEntity));
      await seedDatabase();
    });
  
    const seedDatabase = async () => {
      fotosList = [];
      for (let i = 0; i < 5; i++) {
        const foto: FotoEntity = await fotoRepository.save({
          iso: 200,
          velObturacion: 10,
          apertura: 5,
          fecha: new Date(),
        });
        fotosList.push(foto);
      }
    };
  
    it('should be defined', () => {
      expect(fotoService).toBeDefined();
    });
  

  describe('createFoto', () => {
    it('crear una nueva foto', async () => {
      const foto:FotoDTO  = {
        "iso": 150,
        "velObturacion": 100,
        "apertura": 5,
        "fecha": new Date("2023-11-30T12:30:00Z")
      }
      console.log(' de la nueva foto:', foto.iso);


      const nuevafoto: FotoEntity = await fotoService.createFoto(foto);

      expect(nuevafoto).not.toBeNull();
      console.log('ID de la nueva foto:', nuevafoto);

      const storedFoto: FotoEntity = await fotoRepository.findOne({ where: { id: nuevafoto.id } });
      console.log('jajajja a foto:',storedFoto)
      expect(storedFoto).not.toBeNull();
      console.log('2 de la nueva foto:', nuevafoto.fecha);
      console.log('3 de la nueva foto:', storedFoto.fecha);

      expect(storedFoto.fecha).toEqual(nuevafoto.fecha);
    });

  });

  it('findAll should return all fotos', async () => {
    const fotos = await fotoService.findAllFotos();
    expect(fotos).not.toBeNull();
  });

  it('findOne should return a foto by id', async () => {
    const fotoo: FotoEntity = fotosList[0];
    const museum: FotoEntity = await fotoService.findFotoByID(fotoo.id);
    expect(museum).not.toBeNull();
  });





});
