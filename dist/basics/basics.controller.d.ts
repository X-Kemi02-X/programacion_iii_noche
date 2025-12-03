import { BasicsService } from './basics.service';
interface PrestamoLibroDto {
    isbn: string;
    codigoUsuario: string;
    diasPrestamo: number;
}
export declare class BasicsController {
    private readonly basicService;
    constructor(basicService: BasicsService);
    myFirstGet(): object;
    mySecondGet(): object;
    requestWithParameter(myParameter: string): object;
    create(bodyData: object): object;
    update(id: string, updateBody: object): object;
    updatePatch(id: string, updateBody: object): object;
    delete(id: string): object;
    areaTrianguloV2(bodyData: any): object;
    calcularMayor(bodyData: any): object;
    registrarPrestamo(datosPrestamo: PrestamoLibroDto): object;
}
export {};
