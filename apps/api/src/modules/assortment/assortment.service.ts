import { Assortment } from '@prisma/client';
import { Injectable } from '@nestjs/common';

import { AssortmentCreateInput, MedicineFilterInput } from '@core/interfaces';
import { PrismaService } from '@core/services';

@Injectable()
export class AssortmentService {
  constructor(private readonly prismaService: PrismaService) {}

  public getAssortment(medicine: MedicineFilterInput): Promise<Assortment[]> {
    return this.prismaService.assortment.findMany({
      include: {
        medicine: true,
        pharmacy: true
      },
      where: {
        medicineId: {
          equals: +medicine.id
        }
      }
    });
  }

  public createAssortment(data: AssortmentCreateInput): Promise<Assortment> {
    return this.prismaService.assortment.create({
      data: {
        medicine: {
          connect: {
            id: 1
          }
        },
        pharmacy: {
          connect: {
            id: 1
          }
        },
        amount: +data.amount,
        price: +data.price
      },
      include: {
        medicine: true,
        pharmacy: true
      }
    });
  }
}
