import { AlbumEntity } from 'src/album/album.entity';
import { FotoEntity } from 'src/foto/foto.entity';
export declare class UsuarioEntity {
    id: string;
    nombre: string;
    email: string;
    telefono: string;
    albums: AlbumEntity[];
    fotos: FotoEntity[];
}
