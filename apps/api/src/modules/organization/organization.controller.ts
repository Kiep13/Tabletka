import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Organization, Prisma } from '@prisma/client';
import { HttpCode } from '@nestjs/common';

import { OrganizationService } from './organization.service';

@Resolver('Organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Query('organizations')
  @HttpCode(200)
  getOrganization(): Promise<Organization[]> {
    return this.organizationService.getOrganizations();
  }

  @Mutation('addOrganization')
  @HttpCode(201)
  createOrganization(@Args('organization') data: Prisma.OrganizationCreateInput): Promise<Organization> {
    return this.organizationService.createOrganization(data);
  }
}
