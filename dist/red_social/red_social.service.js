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
exports.RedsocialService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const red_social_entity_1 = require("./red_social.entity");
const typeorm_2 = require("typeorm");
let RedsocialService = class RedsocialService {
    constructor(redSocialRepository) {
        this.redSocialRepository = redSocialRepository;
    }
    async create(redsocialDTO) {
        try {
            if (!redsocialDTO.slogan || redsocialDTO.slogan.length < 20) {
                throw new Error('El slogan debe tener al menos 20 caracteres');
            }
            const red = new red_social_entity_1.RedsocialEntity();
            red.nombre = redsocialDTO.nombre;
            red.slogan = redsocialDTO.slogan;
            await this.redSocialRepository.save(red);
            return redsocialDTO;
        }
        catch (error) {
            throw new Error(`Error al crear el slogan: ${error.message}`);
        }
    }
};
exports.RedsocialService = RedsocialService;
exports.RedsocialService = RedsocialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(red_social_entity_1.RedsocialEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RedsocialService);
//# sourceMappingURL=red_social.service.js.map