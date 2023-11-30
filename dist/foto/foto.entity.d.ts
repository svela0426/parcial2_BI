import { AlbumEntity } from 'src/album/album.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
export declare class FotoEntity {
    id: string;
    iso: number;
    velObturacion: number;
    apertura: number;
    fecha: Date;
    album: AlbumEntity;
    usuario: UsuarioEntity;
}
