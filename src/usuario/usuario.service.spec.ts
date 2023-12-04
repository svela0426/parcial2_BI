import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioService } from './usuario.service';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioDTO } from './usuario.dto';
import { TypeOrmTestingConfig } from '../shared/typeorm-testing-config';

import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UsuarioService', () => {
  let usuarioService: UsuarioService;
  let usuarioRepository: Repository<UsuarioEntity>;
  let usuariosList: UsuarioEntity[];


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
        imports: [...TypeOrmTestingConfig()],
        providers: [UsuarioService],
      }).compile();

    usuarioService = module.get<UsuarioService>(UsuarioService);
    usuarioRepository = module.get<Repository<UsuarioEntity>>(getRepositoryToken(UsuarioEntity));
    await seedDatabase();

});

const seedDatabase = async () => {
  usuariosList = [];
  for (let i = 0; i < 5; i++) {
    const album: UsuarioEntity = await usuarioRepository.save({
      nombre: "new Date",
      email: "ghghg@hotmail.com",
      telefono: "12345678901",
    });
    usuariosList.push(album);
  }
};

  describe('create', () => {
    it('should create a user', async () => {
      const usuarioDTO: UsuarioDTO = {
          nombre: 'John Doe',
          email: 'john.doe@example.com',
          telefono: '12345678901',
          id: ''
      };

      const usuarioEntity = new UsuarioEntity();
      jest.spyOn(usuarioService['usuarioRepository'], 'save').mockResolvedValueOnce(usuarioEntity);

      const result = await usuarioService.create(usuarioDTO);

      expect(result).toEqual(usuarioDTO);
      expect(usuarioService['usuarioRepository'].save).toHaveBeenCalledWith(expect.any(UsuarioEntity));
    });
  });
  it('findAll should return all usuarios', async () => {
    const fotos = await usuarioService.findAll();
    console.log('ID de la nueva foto:', fotos);
    expect(fotos).not.toBeNull();
  });

  it('findOne should return a usuario by id', async () => {
    const storedMuseum: UsuarioEntity = usuariosList[0];
    const usuario: UsuarioEntity = await usuarioService.findOne(storedMuseum.id);
    expect(usuario).not.toBeNull();

  });
});



