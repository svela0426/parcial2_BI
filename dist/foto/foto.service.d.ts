import { FotoEntity } from './foto.entity';
import { FotoDTO } from './foto.dto';
import { Repository } from 'typeorm';
export declare class FotoService {
    private readonly fotoRepository;
    constructor(fotoRepository: Repository<FotoEntity>);
    createFoto(fotoDTO: FotoDTO): Promise<FotoEntity>;
    findFotoByID(id: string): Promise<FotoEntity>;
    findAllFotos(): Promise<FotoDTO[]>;
    deleteFoto(id: string): Promise<FotoEntity>;
}
