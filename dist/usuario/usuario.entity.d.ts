import { AlbumEntity } from '../album/album.entity';
import { FotoEntity } from '../foto/foto.entity';
export declare class UsuarioEntity {
    id: string;
    nombre: string;
    email: string;
    telefono: string;
    albums: AlbumEntity[];
    fotos: FotoEntity[];
}
