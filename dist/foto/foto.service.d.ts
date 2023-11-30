import { FotoEntity } from './foto.entity';
import { FotoDTO } from './foto.dto';
import { Repository } from 'typeorm';
export declare class FotoService {
    private readonly fotoRepository;
    constructor(fotoRepository: Repository<FotoEntity>);
    createFoto(fotoDTO: FotoDTO): Promise<FotoDTO>;
    findFotoByID(id: string): Promise<FotoDTO>;
    findAllFotos(): Promise<FotoDTO[]>;
    deleteFoto(id: string): Promise<FotoEntity>;
}
