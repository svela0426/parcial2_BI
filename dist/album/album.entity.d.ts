import { UsuarioEntity } from '../usuario/usuario.entity';
import { FotoEntity } from '../foto/foto.entity';
export declare class AlbumEntity {
    id: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    titulo: string;
    usuario: UsuarioEntity;
    fotos: FotoEntity[];
}
