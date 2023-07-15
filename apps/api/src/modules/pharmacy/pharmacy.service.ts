import { Pharmacy } from '@prisma/client';
import { Injectable } from '@nestjs/common';

import { PharmacyCreateInput } from '@core/interfaces';
import { PrismaService } from '@core/services';
import { IndexManagerService } from '@elastic/services';
import { Indexes } from '@elastic/enums';

@Injectable()
export class PharmacyService {
  constructor(private readonly prismaService: PrismaService,
              private readonly indexManagerService: IndexManagerService) {}

  public getPharmacies(): Promise<Pharmacy[]> {
    return this.prismaService.pharmacy.findMany({
      include: {
        organization: true
      }
    });
  }

  public async createPharmacy(data: PharmacyCreateInput): Promise<Pharmacy> {
    const createdPharmacy = await this.prismaService.pharmacy.create({
      data: {
        address: data.address,
        organization: {
          connect: {
            id: +data.organizationId
          }
        }
      },
      include: {
        organization: true
      }
    });


    await this.indexManagerService.insertDocumentIntoIndex(Indexes.Pharmacies, createdPharmacy);

    return createdPharmacy;
  }
}
