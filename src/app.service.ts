import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getNewEndpoint(): string {
    return 'this is new endpoint response!';
  }
  getHealt(): any {
    return {
      service: 'Blog Backend Api',
      version: '0.0.1',
    };
  }
}
