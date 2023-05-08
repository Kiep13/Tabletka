import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Pharmacy } from '@prisma/client';
import { HttpCode } from '@nestjs/common';

import { PharmacyCreateInput } from '@core/interfaces';
import { PharmacyService } from './pharmacy.service';

@Resolver('Organization')
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Query('pharmacies')
  @HttpCode(200)
  getPharmacies(): Promise<Pharmacy[]> {
    return this.pharmacyService.getPharmacies();
  }

  @Mutation('addPharmacy')
  @HttpCode(201)
  createPharmacy(@Args('pharmacy') data: PharmacyCreateInput): Promise<Pharmacy> {
    return this.pharmacyService.createPharmacy(data);
  }
}
