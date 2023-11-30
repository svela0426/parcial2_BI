import { RedsocialEntity } from './red_social.entity';
import { RedsocialDTO } from './red_social.dto';
import { Repository } from 'typeorm';
export declare class SportService {
    private readonly redSocialRepository;
    constructor(redSocialRepository: Repository<RedsocialEntity>);
    create(redsocialDTO: RedsocialDTO): Promise<RedsocialDTO>;
}
