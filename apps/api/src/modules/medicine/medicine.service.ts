import { Injectable } from '@nestjs/common';

import { Medicine, Prisma  } from '@prisma/client';
import { PrismaService } from '../../core/services';

@Injectable()
export class MedicineService {
  constructor(private readonly prismaService: PrismaService) {}

  public getMedicines(): Promise<Medicine[]> {
    return this.prismaService.medicine.findMany();
  }

  public createMedicine(data: Prisma.MedicineCreateInput): Promise<Medicine> {
    return this.prismaService.medicine.create({
      data,
    });
  }
}
