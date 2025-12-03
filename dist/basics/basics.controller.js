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
exports.BasicsController = void 0;
const common_1 = require("@nestjs/common");
const basics_service_1 = require("./basics.service");
let BasicsController = class BasicsController {
    basicService;
    constructor(basicService) {
        this.basicService = basicService;
    }
    myFirstGet() {
        return this.basicService.myFirstGet();
    }
    mySecondGet() {
        return this.basicService.mySecondGet();
    }
    requestWithParameter(myParameter) {
        return this.basicService.functionWithParameter(myParameter);
    }
    create(bodyData) {
        return this.basicService.functionWithPost(bodyData);
    }
    update(id, updateBody) {
        return this.basicService.updateWithPut(id, updateBody);
    }
    updatePatch(id, updateBody) {
        return this.basicService.functionWithPatch(id, updateBody);
    }
    delete(id) {
        return this.basicService.delete(id);
    }
    areaTrianguloV2(bodyData) {
        const base = bodyData.base;
        const altura = bodyData.altura;
        return this.basicService.areaTrianguloV2(altura, base);
    }
    calcularMayor(bodyData) {
        return this.basicService.calcularMayor(bodyData);
    }
    registrarPrestamo(datosPrestamo) {
        return this.basicService.registrarPrestamo(datosPrestamo);
    }
};
exports.BasicsController = BasicsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], BasicsController.prototype, "myFirstGet", null);
__decorate([
    (0, common_1.Get)('second'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], BasicsController.prototype, "mySecondGet", null);
__decorate([
    (0, common_1.Get)(':myParameter'),
    __param(0, (0, common_1.Param)('myParameter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], BasicsController.prototype, "requestWithParameter", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BasicsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BasicsController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BasicsController.prototype, "updatePatch", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BasicsController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('area-triangulo-v2'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BasicsController.prototype, "areaTrianguloV2", null);
__decorate([
    (0, common_1.Post)('calcular-mayor'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BasicsController.prototype, "calcularMayor", null);
__decorate([
    (0, common_1.Post)('biblioteca/registrar-prestamo'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], BasicsController.prototype, "registrarPrestamo", null);
exports.BasicsController = BasicsController = __decorate([
    (0, common_1.Controller)('basics'),
    __metadata("design:paramtypes", [basics_service_1.BasicsService])
], BasicsController);
//# sourceMappingURL=basics.controller.js.map