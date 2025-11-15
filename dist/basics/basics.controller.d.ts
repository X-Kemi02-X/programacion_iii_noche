import { BasicsService } from './basics.service';
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
    verificarLicencia(bodyData: {
        nombre: string;
        edad: number;
    }): {
        nombre: string;
        edad: number;
        puedeConducir: boolean;
        mensaje: string;
    };
}
