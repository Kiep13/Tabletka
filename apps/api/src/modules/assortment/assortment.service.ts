import { Assortment } from '@prisma/client';
import { Injectable } from '@nestjs/common';

import { AssortmentCreateInput } from '@core/interfaces';
import { PrismaService } from '@core/services';

@Injectable()
export class AssortmentService {
  constructor(private readonly prismaService: PrismaService) {}

  public getAssortment(): Promise<Assortment[]> {
    return this.prismaService.assortment.findMany({
      include: {
        medicine: true,
        pharmacy: true
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
