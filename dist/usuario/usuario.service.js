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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("./usuario.entity");
const typeorm_2 = require("typeorm");
let UsuarioService = class UsuarioService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async create(usuarioDTO) {
        try {
            const usuario = new usuario_entity_1.UsuarioEntity();
            usuario.nombre = usuarioDTO.nombre;
            usuario.email = usuarioDTO.email;
            usuario.telefono = usuarioDTO.telefono;
            if (usuario.telefono.length > 1 && usuario.telefono.length < 11) {
                throw new Error('El valor del tel debe estar entre 100 y 6400');
            }
            await this.usuarioRepository.save(usuario);
            return usuarioDTO;
        }
        catch (error) {
            throw new Error(`Error al crear el usuario: ${error.message}`);
        }
    }
    async findOne(id) {
        const usuario = await this.usuarioRepository.findOneBy({ "id": id });
        if (!usuario) {
            throw new Error('Usuario no encontrado');
        }
        else {
            return usuario;
        }
    }
    async findAll() {
        return await this.usuarioRepository.find();
    }
};
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.UsuarioEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuarioService);
//# sourceMappingURL=usuario.service.js.map