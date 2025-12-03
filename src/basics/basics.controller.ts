import { Controller, Get, Param, Post, Body, Put, Delete, Patch } from '@nestjs/common';
import { BasicsService } from './basics.service';

interface PrestamoLibroDto {
  isbn: string;
  codigoUsuario: string;
  diasPrestamo: number;
}

@Controller('basics')
export class BasicsController {
  constructor(private readonly basicService: BasicsService) {}

  @Get()
  myFirstGet(): object {
    return this.basicService.myFirstGet();
  }

  @Get('second')
  mySecondGet(): object {
    return this.basicService.mySecondGet();
  }

  @Get(':myParameter')
  requestWithParameter(@Param('myParameter') myParameter: string): object {
    return this.basicService.functionWithParameter(myParameter);
  }

  @Post()
  create(@Body() bodyData: object) {
    return this.basicService.functionWithPost(bodyData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBody: object) {
    return this.basicService.updateWithPut(id, updateBody);
  }

  @Patch(':id')
  updatePatch(@Param('id') id: string, @Body() updateBody: object) {
    return this.basicService.functionWithPatch(id, updateBody);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.basicService.delete(id);
  }

  @Post('area-triangulo-v2')
  areaTrianguloV2(@Body() bodyData: any) {
    const base = bodyData.base;
    const altura = bodyData.altura;

    return this.basicService.areaTrianguloV2(altura, base);
  }

  @Post('calcular-mayor')
  calcularMayor(@Body() bodyData: any) {
    return this.basicService.calcularMayor(bodyData);
  }

  @Post('biblioteca/registrar-prestamo')
  registrarPrestamo(@Body() datosPrestamo: PrestamoLibroDto): object {
    return this.basicService.registrarPrestamo(datosPrestamo);
  }
}