import { Pharmacy } from '@prisma/client';
import { Injectable } from '@nestjs/common';

import { PharmacyCreateInput } from '@core/interfaces';
import { PrismaService } from '@core/services';

@Injectable()
export class PharmacyService {
  constructor(private readonly prismaService: PrismaService) {}

  public getPharmacies(): Promise<Pharmacy[]> {
    return this.prismaService.pharmacy.findMany({
      include: {
        organization: true
      }
    });
  }

  public createPharmacy(data: PharmacyCreateInput): Promise<Pharmacy> {
    return this.prismaService.pharmacy.create({
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
  }
}
