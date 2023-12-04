"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmTestingConfig = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const album_entity_1 = require("../album/album.entity");
const foto_entity_1 = require("../foto/foto.entity");
const usuario_entity_1 = require("../usuario/usuario.entity");
const red_social_entity_1 = require("../red_social/red_social.entity");
const TypeOrmTestingConfig = () => [
    typeorm_1.TypeOrmModule.forRoot({
        type: 'sqlite',
        database: ':memory:',
        dropSchema: true,
        entities: [album_entity_1.AlbumEntity, foto_entity_1.FotoEntity, usuario_entity_1.UsuarioEntity, red_social_entity_1.RedsocialEntity],
        synchronize: true,
        keepConnectionAlive: true
    }),
    typeorm_1.TypeOrmModule.forFeature([album_entity_1.AlbumEntity, foto_entity_1.FotoEntity, usuario_entity_1.UsuarioEntity, red_social_entity_1.RedsocialEntity]),
];
exports.TypeOrmTestingConfig = TypeOrmTestingConfig;
//# sourceMappingURL=typeorm-testing-config.js.map