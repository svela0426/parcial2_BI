import { AlbumService } from './album.service';
import { AlbumDTO } from './album.dto';
export declare class AlbumController {
    private readonly albumService;
    constructor(albumService: AlbumService);
    findOneBy(fotoId: string): Promise<AlbumDTO>;
    create(fotoDTO: AlbumDTO): Promise<AlbumDTO>;
    agregarFotoAAbum(idFoto: string, idAlbum: string): Promise<{
        success: boolean;
        data: AlbumDTO;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
    findAll(): Promise<AlbumDTO[]>;
    delete(id: string): Promise<import("./album.entity").AlbumEntity>;
}
