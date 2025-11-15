import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicsService {

  myFirstGet(): object {
    return {
      service: 'Blog Backend API',
      function: 'basics get',
      message: 'My new Get'
    }
  }


  mySecondGet(): object {
    return {
      service: 'Blog Backend API',
      function: 'basics get',
      message: 'My second Get'
    }
  }


  functionWithParameter(parameter: string): object {
    return {
      service: 'Blog Backend API',
      function: 'basics get with parameter',
      message: 'Funcion con parámetro',
      parameter: parameter
    };
  }

  functionWithPost(parameter: object): object {
    return {
      service: 'Blog Backend Api',
      function: 'basics post with body',
      body: parameter
    };
  }
  updateWithPut(parameter: string,
    body: object
  ): object {
    return {
      service: 'Blog Backend Api',
      function: 'basics peticion put',
      message: 'Funcion con parametro',
      parameter: parameter,
      body: body,
    };
  }
  functionWithPatch(parameter: string,
    body: object
  ): object {
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
      parameter: parameter
    };
  }
  verificarEdad(data: { nombre: string; edad: number }) {
    if (data.edad >= 18) {
      return {
        nombre: data.nombre,
        edad: data.edad,
        puedeConducir: true,
        mensaje: ' Puede obtener licencia de conducir.'
      };
    } else {
      return {
        nombre: data.nombre,
        edad: data.edad,
        puedeConducir: false,
        mensaje: ' No puede conducir, es menor de edad.'
      };
    }
  }
}