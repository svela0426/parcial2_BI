"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumService = void 0;
const common_1 = require("@nestjs/common");
const album_entity_1 = require("./album.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const foto_entity_1 = require("../foto/foto.entity");
let AlbumService = class AlbumService {
    constructor(albumRepository, fotoRepository) {
        this.albumRepository = albumRepository;
        this.fotoRepository = fotoRepository;
    }
    async create(albumDTO) {
        try {
            const album = new album_entity_1.AlbumEntity();
            album.fecha_inicio = albumDTO.fecha_inicio;
            album.fecha_fin = albumDTO.fecha_fin;
            album.titulo = albumDTO.titulo;
            if (album.titulo.length === 0) {
                throw new Error('El título no puede estar vacío');
            }
            await this.albumRepository.save(album);
            return albumDTO;
        }
        catch (error) {
            throw new Error(`Error al crear el album: ${error.message}`);
        }
    }
    async addPhotoToAlbum(id_foto, id_album) {
        const foto = await this.fotoRepository.findOneBy({ "id": id_foto });
        if (!foto) {
            throw new Error('Foto no encontrada');
        }
        const album = await this.albumRepository.findOneBy({ "id": id_album });
        if (foto.fecha >= album.fecha_inicio && foto.fecha <= album.fecha_fin) {
            album.fotos.push(foto);
            await this.albumRepository.save(album);
            return album;
        }
        else {
            throw new Error('La fecha de la foto no está dentro del rango del álbum');
        }
    }
    async findOne(id) {
        const album = await this.albumRepository.findOneBy({ "id": id });
        if (!album)
            throw new Error('album no encontrado');
        else
            return album;
    }
    async findAll() {
        return await this.albumRepository.find();
    }
    async delete(id) {
        const album = await this.albumRepository.findOneBy({ "id": id });
        if (!album)
            throw new Error('album no encontrado');
        else
            return await this.albumRepository.remove(album);
    }
};
exports.AlbumService = AlbumService;
exports.AlbumService = AlbumService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(album_entity_1.AlbumEntity)),
    __param(1, (0, typeorm_2.InjectRepository)(foto_entity_1.FotoEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], AlbumService);
//# sourceMappingURL=album.service.js.map