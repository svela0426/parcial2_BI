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
exports.FotoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const foto_entity_1 = require("./foto.entity");
const typeorm_2 = require("typeorm");
let FotoService = class FotoService {
    constructor(fotoRepository) {
        this.fotoRepository = fotoRepository;
    }
    async createFoto(fotoDTO) {
        try {
            const foto = new foto_entity_1.FotoEntity();
            foto.iso = fotoDTO.iso;
            foto.velObturacion = fotoDTO.velObturacion;
            foto.apertura = fotoDTO.apertura;
            foto.fecha = fotoDTO.fecha;
            if (foto.iso < 100 || foto.iso > 6400) {
                throw new Error('El valor del ISO debe estar entre 100 y 6400');
            }
            if (foto.velObturacion < 2 || foto.velObturacion > 250) {
                throw new Error('El valor de la velocidad de obturación debe estar entre 2 y 250');
            }
            if (foto.apertura < 1 || foto.apertura > 32) {
                throw new Error('El valor de la apertura debe estar entre 1 y 32');
            }
            const valores = [foto.iso, foto.velObturacion, foto.apertura];
            const valoresSuperiores = valores.filter((valor) => valor > (valores.reduce((acc, valor) => acc + valor) / valores.length));
            if (valoresSuperiores.length > 2) {
                throw new Error('Máximo dos valores pueden estar por encima del valor medio');
            }
            await this.fotoRepository.save(foto);
            return foto;
        }
        catch (error) {
            throw new Error(`Error al crear el deporte: ${error.message}`);
        }
    }
    async findFotoByID(id) {
        const foto = await this.fotoRepository.findOne({ where: { id } });
        if (!foto) {
            throw new Error('foro no encontrado');
        }
        else {
            return foto;
        }
    }
    async findAllFotos() {
        return await this.fotoRepository.find();
    }
    async deleteFoto(id) {
        const foto = await this.fotoRepository.findOne({ where: { id } });
        if (!foto)
            throw new Error('foto no encontrado');
        else
            return await this.fotoRepository.remove(foto);
    }
};
exports.FotoService = FotoService;
exports.FotoService = FotoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(foto_entity_1.FotoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FotoService);
//# sourceMappingURL=foto.service.js.map