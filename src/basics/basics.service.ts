import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicsService {
  private historialPrestamos: any[] = [];

  myFirstGet(): object {
    return {
      service: 'Blog Backend API',
      function: 'basics get',
      message: 'My new Get',
    };
  }

  mySecondGet(): object {
    return {
      service: 'Blog Backend API',
      function: 'basics get',
      message: 'My second Get',
    };
  }

  functionWithParameter(parameter: string): object {
    return {
      service: 'Blog Backend API',
      function: 'basics get with parameter',
      message: 'Funcion con parámetro',
      parameter: parameter,
    };
  }

  functionWithPost(parameter: object): object {
    return {
      service: 'Blog Backend Api',
      function: 'basics post with body',
      body: parameter,
    };
  }

  updateWithPut(parameter: string, body: object): object {
    return {
      service: 'Blog Backend Api',
      function: 'basics peticion put',
      message: 'Funcion con parametro',
      parameter: parameter,
      body: body,
    };
  }

  functionWithPatch(parameter: string, body: object): object {
    return {
    service: 'Blog Backend Api',
      function: 'basics peticion Patch',
      message: 'Funcion con parametro',
      parameter: parameter,
      body: body,
    };
  }

  delete(parameter: string): object {
    return {
      service: 'Blog Backend API',
      function: 'basics delete with id',
      message: 'Funcion delete con parametro',
      parameter: parameter,
    };
  }

  areaTrianguloV2(altura: number, base: number): object {
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

  calcularMayor(parameter: any): object {
    const mayor = Math.max(parameter.valor1, parameter.valor2, parameter.valor3);
    return {
      service: 'Blog Backend API',
      function: 'basics peticion post',
      message: 'Funcion con parametro',
      parameter: parameter,
      mayor: mayor,
    };
  }

  registrarPrestamo(datos: any): object {
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
}