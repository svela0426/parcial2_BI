import { FotoService } from './foto.service';
import { FotoDTO } from './foto.dto';
export declare class FotoController {
    private readonly fotoService;
    constructor(fotoService: FotoService);
    findAll(): Promise<FotoDTO[]>;
    findOneBy(fotoId: string): Promise<FotoDTO>;
    create(fotoDTO: FotoDTO): Promise<FotoDTO>;
}
