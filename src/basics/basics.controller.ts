import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { BasicsService } from './basics.service';
import { retry } from 'rxjs';

@Controller('basics')
export class BasicsController {
  constructor(
    private readonly basicService: BasicsService) {}

  @Get()
  myFirstGet(): object {
    return this.basicService.myFirstGet();
  }

  @Get('second')
  mySecondGet(): object {
    return this.basicService.mySecondGet();
  }

  @Get(':myParameter')
  requestWithParameter(
    @Param('myParameter') myParameter: string): object {
    return this.basicService.functionWithParameter(myParameter);
  }

  @Post()
  create (@Body() bodyData: object) {
    return this.basicService
      .functionWithPost(bodyData);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateBody: object) {
    return this.basicService
      .updateWithPut(id, updateBody);
  }

  @Put(':id')
  updatePatch(
    @Param('id') id: string,
    @Body() updateBody: object) {
    return this.basicService
      .functionWithPatch(id, updateBody);
  }

  @Delete(':id')
  delete(
    @Param('id') id: string,
  ) {
    return this.basicService.delete(id);
  }
  @Post('licencia-conducir')
  verificarLicencia(@Body() bodyData: { nombre: string; edad: number }) {
    return this.basicService.verificarEdad(bodyData);
  }
}
