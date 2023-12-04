import { FotoService } from './foto.service';
import { FotoDTO } from './foto.dto';
export declare class FotoController {
    private readonly fotoService;
    constructor(fotoService: FotoService);
    findAll(): Promise<FotoDTO[]>;
    findOneBy(fotoId: string): Promise<import("./foto.entity").FotoEntity>;
    create(fotoDTO: FotoDTO): Promise<import("./foto.entity").FotoEntity>;
}
