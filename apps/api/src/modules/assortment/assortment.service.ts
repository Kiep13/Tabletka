import { Assortment } from '@prisma/client';
import { Injectable } from '@nestjs/common';

import { AssortmentCreateInput, MedicineFilterInput } from '@core/interfaces';
import { PrismaService } from '@core/services';
import { IndexManagerService } from '@elastic/services';
import { Indexes } from '@elastic/enums';

@Injectable()
export class AssortmentService {
  constructor(private readonly prismaService: PrismaService,
              private readonly indexManagerService: IndexManagerService) {}

  public getAssortment(medicine: MedicineFilterInput): Promise<Assortment[]> {
    return this.prismaService.assortment.findMany({
      include: {
        medicine: true,
        pharmacy: {
          include: {
            organization: true
          }
        }
      },
      where: {
        medicineId: {
          equals: +medicine.id
        }
      }
    });
  }

  public async createAssortment(data: AssortmentCreateInput): Promise<Assortment> {
    const createdAssortment = await this.prismaService.assortment.create({
      data: {
        medicine: {
          connect: {
            id: +data.medicineId
          }
        },
        pharmacy: {
          connect: {
            id: +data.pharmacyId
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

    await this.indexManagerService.insertDocumentIntoIndex(Indexes.Assortment,createdAssortment);

    return createdAssortment;
  }
}
