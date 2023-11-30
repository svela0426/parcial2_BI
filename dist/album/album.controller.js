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
exports.AlbumController = void 0;
const common_1 = require("@nestjs/common");
const album_service_1 = require("./album.service");
const album_dto_1 = require("./album.dto");
let AlbumController = class AlbumController {
    constructor(albumService) {
        this.albumService = albumService;
    }
    async findOneBy(fotoId) {
        return await this.albumService.findOne(fotoId);
    }
    async create(fotoDTO) {
        return await this.albumService.create(fotoDTO);
    }
    async agregarFotoAAbum(idFoto, idAlbum) {
        try {
            const album = await this.albumService.addPhotoToAlbum(idFoto, idAlbum);
            return { success: true, data: album };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    async findAll() {
        return await this.albumService.findAll();
    }
    async delete(id) {
        return await this.albumService.delete(id);
    }
};
exports.AlbumController = AlbumController;
__decorate([
    (0, common_1.Get)(':fotoId'),
    __param(0, (0, common_1.Param)('fotoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "findOneBy", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [album_dto_1.AlbumDTO]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('agregar-foto-a-album/:id_foto/:id_album'),
    __param(0, (0, common_1.Param)('id_foto')),
    __param(1, (0, common_1.Param)('id_album')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "agregarFotoAAbum", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlbumController.prototype, "delete", null);
exports.AlbumController = AlbumController = __decorate([
    (0, common_1.Controller)('album'),
    __metadata("design:paramtypes", [album_service_1.AlbumService])
], AlbumController);
//# sourceMappingURL=album.controller.js.map