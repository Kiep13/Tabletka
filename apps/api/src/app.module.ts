import { Module } from '@nestjs/common';

import { PrismaService } from './core/prisma/prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
