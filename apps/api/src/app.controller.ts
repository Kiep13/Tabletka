import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect('https://nestjs.com', 301)
  getHello(): void {
    return;
  }
}
