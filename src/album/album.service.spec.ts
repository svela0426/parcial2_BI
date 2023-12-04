import { Test, TestingModule } from '@nestjs/testing';
import { AlbumService } from './album.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AlbumDTO } from './album.dto';
import { TypeOrmTestingConfig } from '../shared/typeorm-testing-config';
import { AlbumEntity } from './album.entity';
import { Repository } from 'typeorm';
import { FotoEntity } from '../foto/foto.entity';
import { FotoDTO } from '../foto/foto.dto';
import { FotoService } from '../foto/foto.service';


describe('AlbumService', () => {
    let fotoService: AlbumService;
    let fotoRepository: Repository<AlbumEntity>;
    let fotosList: AlbumEntity[];

    let albumService: FotoService;
    let albumRepository: Repository<FotoEntity>;
  
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [...TypeOrmTestingConfig()],
            providers: [AlbumService,FotoService],
          }).compile();
  
      fotoService = module.get<AlbumService>(AlbumService);
      albumService = module.get<FotoService>(FotoService);

      albumRepository = module.get<Repository<FotoEntity>>(getRepositoryToken(FotoEntity));
      fotoRepository = module.get<Repository<AlbumEntity>>(getRepositoryToken(AlbumEntity));
      await seedDatabase();
    });
    const seedDatabase = async () => {
        fotosList = [];
        for (let i = 0; i < 5; i++) {
          const album: AlbumEntity = await fotoRepository.save({
            fecha_inicio: new Date("2019-11-30T12:30:00Z"),
            fecha_fin: new Date("2024-11-30T12:30:00Z"),
            titulo: "hhh",
          });
          fotosList.push(album);
        }
      };
    
      it('should be defined', () => {
        expect(fotoService).toBeDefined();
      });
      describe('createAlbm', () => {
        it('crear una nuevo album', async () => {
          const foto:AlbumDTO  = {
              fecha_inicio: new Date("2019-11-30T12:30:00Z"),
              fecha_fin: new Date("2024-11-30T12:30:00Z"),
              titulo: "hhh",
          }
          console.log(' de la nueva foto:', foto.fecha_inicio);
    
    
          const nuevafoto: AlbumEntity = await fotoService.create(foto);
    
          expect(nuevafoto).not.toBeNull();
          console.log('ID de la nueva foto:', nuevafoto);
    
          const storedFoto: AlbumEntity = await fotoRepository.findOne({ where: { id: nuevafoto.id } });
          expect(storedFoto).not.toBeNull();

        });
    
      });

      it('findAll should return all albums', async () => {
        const fotos = await fotoService.findAll();
        console.log('ID de la nueva foto:', fotos);
        expect(fotos).not.toBeNull();
      });

      it('findOne should return a museum by id', async () => {
        const storedMuseum: AlbumEntity = fotosList[0];
        const museum: AlbumEntity = await fotoService.findOne(storedMuseum.id);
        expect(museum).not.toBeNull();

      });

      it('delete should remove a museum', async () => {
        const museum: AlbumEntity = fotosList[0];
        await fotoService.delete(museum.id);
      
        const deletedMuseum: AlbumEntity = await fotoRepository.findOne({ where: { id: museum.id } })
        expect(deletedMuseum).toBeNull();
      });

      

      describe('addPhotoToAlbum', () => {
        it('should add a photo to the album', async () => {
          // Preparar datos de prueba (crear un álbum y una foto)
          const album: AlbumEntity = await fotoRepository.save({
            fecha_inicio: new Date("2019-11-30T12:30:00Z"),
            fecha_fin: new Date("2024-11-30T12:30:00Z"),
            titulo: "Álbum de prueba",
          });
      
          const foto:FotoDTO  = {
            "iso": 150,
            "velObturacion": 100,
            "apertura": 5,
            "fecha": new Date("2023-11-30T12:30:00Z")
          }

          const nuevafoto: FotoEntity = await albumService.createFoto(foto);

      
          // Llamar al método addPhotoToAlbum
          await fotoService.addPhotoToAlbum(nuevafoto.id, album.id);
      
          // Verificar que la foto se haya agregado al álbum
          const updatedAlbum: AlbumEntity = await fotoRepository.findOne({ where: { id: album.id }, relations: ['fotos'] });
          expect(updatedAlbum).toBeDefined();
          console.log('jajajja a foto:',updatedAlbum)
          console.log('jajajja a foto:',nuevafoto)


          expect(updatedAlbum.fotos).toContainEqual(nuevafoto);
        });
      
      
       
      });
      
    
  

});