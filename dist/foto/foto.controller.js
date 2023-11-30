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
exports.FotoController = void 0;
const common_1 = require("@nestjs/common");
const foto_service_1 = require("./foto.service");
const foto_dto_1 = require("./foto.dto");
let FotoController = class FotoController {
    constructor(fotoService) {
        this.fotoService = fotoService;
    }
    async findAll() {
        return await this.fotoService.findAllFotos();
    }
    async findOneBy(fotoId) {
        return await this.fotoService.findFotoByID(fotoId);
    }
    async create(fotoDTO) {
        return await this.fotoService.createFoto(fotoDTO);
    }
};
exports.FotoController = FotoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FotoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':fotoId'),
    __param(0, (0, common_1.Param)('fotoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FotoController.prototype, "findOneBy", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [foto_dto_1.FotoDTO]),
    __metadata("design:returntype", Promise)
], FotoController.prototype, "create", null);
exports.FotoController = FotoController = __decorate([
    (0, common_1.Controller)('foto'),
    __metadata("design:paramtypes", [foto_service_1.FotoService])
], FotoController);
//# sourceMappingURL=foto.controller.js.map