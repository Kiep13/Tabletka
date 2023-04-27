import { NestFactory } from '@nestjs/core';

import { PrismaService } from './core/services/prisma.service';
import { environment } from '../environments';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(environment.port);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
}
bootstrap();
