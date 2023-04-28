import { Injectable } from '@nestjs/common';

import { Organization, Prisma } from '@prisma/client';
import { PrismaService } from '../../core/services';

@Injectable()
export class OrganizationService {
  constructor(private readonly prismaService: PrismaService) {}

  public getOrganizations(): Promise<Organization[]> {
    return this.prismaService.organization.findMany();
  }

  public createOrganization(data: Prisma.OrganizationCreateInput): Promise<Organization> {
    return this.prismaService.organization.create({
      data,
    });
  }
}
