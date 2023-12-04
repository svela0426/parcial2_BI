"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedsocialModule = void 0;
const common_1 = require("@nestjs/common");
const red_social_controller_1 = require("./red_social.controller");
const red_social_service_1 = require("./red_social.service");
const red_social_entity_1 = require("./red_social.entity");
const typeorm_1 = require("@nestjs/typeorm");
let RedsocialModule = class RedsocialModule {
};
exports.RedsocialModule = RedsocialModule;
exports.RedsocialModule = RedsocialModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([red_social_entity_1.RedsocialEntity])],
        controllers: [red_social_controller_1.RedsocialController],
        providers: [red_social_service_1.RedsocialService]
    })
], RedsocialModule);
//# sourceMappingURL=red_social.module.js.map