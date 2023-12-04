import { Test, TestingModule } from '@nestjs/testing';
import { RedsocialService } from './red_social.service';
import { RedsocialEntity } from './red_social.entity';
import { RedsocialDTO } from './red_social.dto';
import { TypeOrmTestingConfig } from '../shared/typeorm-testing-config';

import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('Red_socialService', () => {
  let usuarioService: RedsocialService;
  let usuarioRepository: Repository<RedsocialEntity>;
  let usuariosList: RedsocialEntity[];


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
        imports: [...TypeOrmTestingConfig()],
        providers: [RedsocialService],
      }).compile();

    usuarioService = module.get<RedsocialService>(RedsocialService);
    usuarioRepository = module.get<Repository<RedsocialEntity>>(getRepositoryToken(RedsocialEntity));

});


describe('createAlbm', () => {
    it('crear una nuevo album', async () => {
      const foto:RedsocialDTO  = {
          slogan: "stringstringstringstringstringstringstringstring",
          nombre: "string"
            }


      const nuevafoto: RedsocialEntity = await usuarioService.create(foto);

      expect(nuevafoto).not.toBeNull();
      console.log('ID de la nueva foto:', nuevafoto);

      const storedFoto: RedsocialEntity = await usuarioRepository.findOne({ where: { id: nuevafoto.id } });
      expect(storedFoto).not.toBeNull();

    });

  });
});