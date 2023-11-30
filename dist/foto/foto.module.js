"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FotoModule = void 0;
const common_1 = require("@nestjs/common");
const foto_controller_1 = require("./foto.controller");
const foto_service_1 = require("./foto.service");
const foto_entity_1 = require("./foto.entity");
const typeorm_1 = require("@nestjs/typeorm");
let FotoModule = class FotoModule {
};
exports.FotoModule = FotoModule;
exports.FotoModule = FotoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([foto_entity_1.FotoEntity])],
        controllers: [foto_controller_1.FotoController],
        providers: [foto_service_1.FotoService]
    })
], FotoModule);
//# sourceMappingURL=foto.module.js.map