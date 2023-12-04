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
exports.RedsocialController = void 0;
const common_1 = require("@nestjs/common");
const red_social_service_1 = require("./red_social.service");
const red_social_dto_1 = require("./red_social.dto");
let RedsocialController = class RedsocialController {
    constructor(fotoService) {
        this.fotoService = fotoService;
    }
    async create(fotoDTO) {
        const nuevafoto = await this.fotoService.create(fotoDTO);
        return nuevafoto;
    }
};
exports.RedsocialController = RedsocialController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [red_social_dto_1.RedsocialDTO]),
    __metadata("design:returntype", Promise)
], RedsocialController.prototype, "create", null);
exports.RedsocialController = RedsocialController = __decorate([
    (0, common_1.Controller)('red'),
    __metadata("design:paramtypes", [red_social_service_1.RedsocialService])
], RedsocialController);
//# sourceMappingURL=red_social.controller.js.map