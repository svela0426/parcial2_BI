import { UsuarioEntity } from './usuario.entity';
import { UsuarioDTO } from './usuario.dto';
import { Repository } from 'typeorm';
export declare class UsuarioService {
    private readonly usuarioRepository;
    constructor(usuarioRepository: Repository<UsuarioEntity>);
    create(usuarioDTO: UsuarioDTO): Promise<UsuarioDTO>;
    findOne(id: string): Promise<UsuarioDTO>;
    findAll(): Promise<UsuarioDTO[]>;
}
