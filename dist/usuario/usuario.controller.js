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
exports.UusarioController = void 0;
const usuario_service_1 = require("./usuario.service");
const usuario_dto_1 = require("./usuario.dto");
const common_1 = require("@nestjs/common");
let UusarioController = class UusarioController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    async create(usuarioDTO) {
        return await this.usuarioService.create(usuarioDTO);
    }
    async findOne(id_usuario) {
        return await this.usuarioService.findOne(id_usuario);
    }
    async findAll() {
        return await this.usuarioService.findAll();
    }
};
exports.UusarioController = UusarioController;
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_dto_1.UsuarioDTO]),
    __metadata("design:returntype", Promise)
], UusarioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id_usuario'),
    __param(0, (0, common_1.Param)('id_usuario')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UusarioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UusarioController.prototype, "findAll", null);
exports.UusarioController = UusarioController = __decorate([
    (0, common_1.Controller)('usuario'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UusarioController);
//# sourceMappingURL=usuario.controller.js.map