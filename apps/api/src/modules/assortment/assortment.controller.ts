import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Assortment } from '@prisma/client';
import { HttpCode } from '@nestjs/common';

import { AssortmentCreateInput, MedicineFilterInput } from '@core/interfaces';
import { AssortmentService } from './assortment.service';

@Resolver('Assortment')
export class AssortmentController {
  constructor(private readonly assortmentService: AssortmentService) {}

  @Query('assortment')
  @HttpCode(200)
  getAssortment(@Args('medicine') medicine: MedicineFilterInput): Promise<Assortment[]> {
    return this.assortmentService.getAssortment(medicine);
  }

  @Mutation('addAssortment')
  @HttpCode(201)
  createAssortment(@Args('assortment') data: AssortmentCreateInput): Promise<Assortment> {
    return this.assortmentService.createAssortment(data);
  }
}
