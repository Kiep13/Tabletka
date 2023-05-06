import { Medicine, Prisma  } from '@prisma/client';
import { Injectable } from '@nestjs/common';

import { PrismaService } from '@core/services';

@Injectable()
export class MedicineService {
  constructor(private readonly prismaService: PrismaService) {}

  public getMedicines(searchTerm: string): Promise<Medicine[]> {
    return this.prismaService.medicine.findMany({
      where: {
        title: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      }
    });
  }

  public createMedicine(data: Prisma.MedicineCreateInput): Promise<Medicine> {
    return this.prismaService.medicine.create({
      data,
    });
  }
}
