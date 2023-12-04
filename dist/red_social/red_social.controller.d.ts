import { RedsocialService } from './red_social.service';
import { RedsocialDTO } from './red_social.dto';
export declare class RedsocialController {
    private readonly fotoService;
    constructor(fotoService: RedsocialService);
    create(fotoDTO: RedsocialDTO): Promise<import("./red_social.entity").RedsocialEntity>;
}
