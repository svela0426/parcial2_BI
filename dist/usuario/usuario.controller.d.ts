import { UsuarioService } from './usuario.service';
import { UsuarioDTO } from './usuario.dto';
export declare class UusarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(usuarioDTO: UsuarioDTO): Promise<UsuarioDTO>;
    findOne(id_usuario: string): Promise<import("./usuario.entity").UsuarioEntity>;
    findAll(): Promise<UsuarioDTO[]>;
}
