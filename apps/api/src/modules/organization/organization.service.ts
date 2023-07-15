import { Organization, Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';

import { PrismaService } from '@core/services';
import { IndexManagerService } from '@elastic/services';
import { Indexes } from '@elastic/enums';

@Injectable()
export class OrganizationService {
  constructor(private readonly prismaService: PrismaService,
              private readonly indexManagerService: IndexManagerService) {}

  public getOrganizations(): Promise<Organization[]> {
    return this.prismaService.organization.findMany();
  }

  public async createOrganization(data: Prisma.OrganizationCreateInput): Promise<Organization> {
    const createdOrganization = await this.prismaService.organization.create({
      data,
    });

    await this.indexManagerService.insertDocumentIntoIndex(Indexes.Organizations,createdOrganization);

    return createdOrganization;
  }
}
