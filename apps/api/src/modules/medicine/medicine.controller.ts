import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Medicine, Prisma } from '@prisma/client';
import { HttpCode } from '@nestjs/common';

import { MedicineService } from './medicine.service';

@Resolver('Medicine')
export class MedicineController {
  constructor(private readonly medicineService: MedicineService) {}

  @Query('medicines')
  @HttpCode(200)
  getMedicines(): Promise<Medicine[]> {
    return this.medicineService.getMedicines();
  }

  @Mutation('addMedicine')
  @HttpCode(201)
  createMedicine(@Args('medicine') data: Prisma.MedicineCreateInput): Promise<Medicine> {
    return this.medicineService.createMedicine(data);
  }
}
