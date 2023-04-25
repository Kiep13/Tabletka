import { Controller, Get } from '@nestjs/common';

import { Medicine } from '@prisma/client';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<Medicine[]> {
    return this.appService.getHello();
  }
}
