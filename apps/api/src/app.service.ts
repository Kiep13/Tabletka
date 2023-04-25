import { Injectable } from '@nestjs/common';

import { Medicine } from '@prisma/client';
import { PrismaService } from './core/prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService) {}

  getHello(): Promise<Medicine[]> {
    return this.prismaService.medicine.findMany();
  }
}
