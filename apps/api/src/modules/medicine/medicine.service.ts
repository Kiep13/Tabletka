import { Medicine, Prisma  } from '@prisma/client';
import { Injectable } from '@nestjs/common';

import { PrismaService } from '@core/services';
import { IndexManagerService } from '@elastic/services';
import { Indexes } from '@elastic/enums';

@Injectable()
export class MedicineService {
  constructor(private readonly prismaService: PrismaService,
              private readonly indexManagerService: IndexManagerService) {}

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

  public async createMedicine(data: Prisma.MedicineCreateInput): Promise<Medicine> {
    const createdMedicine = await this.prismaService.medicine.create({
      data,
    });

    await this.indexManagerService.insertDocumentIntoIndex(Indexes.Medicines,createdMedicine);

    return createdMedicine;
  }
}
