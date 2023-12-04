import { AlbumEntity } from './album.entity';
import { AlbumDTO } from './album.dto';
import { Repository } from 'typeorm';
import { FotoEntity } from '../foto/foto.entity';
export declare class AlbumService {
    private readonly albumRepository;
    private readonly fotoRepository;
    constructor(albumRepository: Repository<AlbumEntity>, fotoRepository: Repository<FotoEntity>);
    create(albumDTO: AlbumDTO): Promise<AlbumEntity>;
    addPhotoToAlbum(id_foto: string, id_album: any): Promise<AlbumDTO>;
    findOne(id: string): Promise<AlbumEntity>;
    findAll(): Promise<AlbumDTO[]>;
    delete(id: string): Promise<AlbumEntity>;
}
