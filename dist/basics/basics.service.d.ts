export declare class BasicsService {
    myFirstGet(): object;
    mySecondGet(): object;
    functionWithParameter(parameter: string): object;
    functionWithPost(parameter: object): object;
    updateWithPut(parameter: string, body: object): object;
    functionWithPatch(parameter: string, body: object): object;
    delete(parameter: string): object;
    verificarEdad(data: {
        nombre: string;
        edad: number;
    }): {
        nombre: string;
        edad: number;
        puedeConducir: boolean;
        mensaje: string;
    };
}
