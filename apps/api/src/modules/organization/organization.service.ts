import { Organization, Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

import { PrismaService } from '@core/services';
import { Indexes } from '@elastic/enums';

@Injectable()
export class OrganizationService {
  constructor(private readonly prismaService: PrismaService,
              private readonly elasticsearchService: ElasticsearchService) {}

  public getOrganizations(): Promise<Organization[]> {
    return this.prismaService.organization.findMany();
  }

  public async createOrganization(data: Prisma.OrganizationCreateInput): Promise<Organization> {
    const createdOrganization = await this.prismaService.organization.create({
      data,
    });

    await this.elasticsearchService.index({
      index: Indexes.Organizations,
      body: createdOrganization,
    });

    return createdOrganization;
  }
}
