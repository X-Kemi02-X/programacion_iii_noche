"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicsService = void 0;
const common_1 = require("@nestjs/common");
let BasicsService = class BasicsService {
    historialPrestamos = [];
    myFirstGet() {
        return {
            service: 'Blog Backend API',
            function: 'basics get',
            message: 'My new Get',
        };
    }
    mySecondGet() {
        return {
            service: 'Blog Backend API',
            function: 'basics get',
            message: 'My second Get',
        };
    }
    functionWithParameter(parameter) {
        return {
            service: 'Blog Backend API',
            function: 'basics get with parameter',
            message: 'Funcion con parámetro',
            parameter: parameter,
        };
    }
    functionWithPost(parameter) {
        return {
            service: 'Blog Backend Api',
            function: 'basics post with body',
            body: parameter,
        };
    }
    updateWithPut(parameter, body) {
        return {
            service: 'Blog Backend Api',
            function: 'basics peticion put',
            message: 'Funcion con parametro',
            parameter: parameter,
            body: body,
        };
    }
    functionWithPatch(parameter, body) {
        return {
            service: 'Blog Backend Api',
            function: 'basics peticion Patch',
            message: 'Funcion con parametro',
            parameter: parameter,
            body: body,
        };
    }
    delete(parameter) {
        return {
            service: 'Blog Backend API',
            function: 'basics delete with id',
            message: 'Funcion delete con parametro',
            parameter: parameter,
        };
    }
    areaTrianguloV2(altura, base) {
        const area = (base * altura) / 2;
        return {
            service: 'Blog Backend API',
            function: 'basics peticion post',
            message: 'Funcion con parametro',
            base: base,
            altura: altura,
            area: area,
        };
    }
    calcularMayor(parameter) {
        const mayor = Math.max(parameter.valor1, parameter.valor2, parameter.valor3);
        return {
            service: 'Blog Backend API',
            function: 'basics peticion post',
            message: 'Funcion con parametro',
            parameter: parameter,
            mayor: mayor,
        };
    }
    registrarPrestamo(datos) {
        const fechaDevolucion = new Date();
        fechaDevolucion.setDate(fechaDevolucion.getDate() + datos.diasPrestamo);
        const nuevoPrestamo = {
            idPrestamo: this.historialPrestamos.length + 1,
            isbn: datos.isbn,
            codigoUsuario: datos.codigoUsuario,
            fechaPrestamo: new Date().toISOString().split('T')[0],
            fechaDevolucionEstimada: fechaDevolucion.toISOString().split('T')[0],
        };
        this.historialPrestamos.push(nuevoPrestamo);
        return {
            servicio: 'Biblioteca MP',
            accion: 'Préstamo Registrado',
            prestamo: nuevoPrestamo,
        };
    }
};
exports.BasicsService = BasicsService;
exports.BasicsService = BasicsService = __decorate([
    (0, common_1.Injectable)()
], BasicsService);
//# sourceMappingURL=basics.service.js.map