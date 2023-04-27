import { Body, Controller, Get, HttpCode, Post } from "@nestjs/common";

import { Medicine, Prisma } from "@prisma/client";
import { MedicineService } from './medicine.service';

@Controller('medicine')
export class MedicineController {
  constructor(private readonly medicineService: MedicineService) {}

  @Get()
  @HttpCode(200)
  getMedicines(): Promise<Medicine[]> {
    return this.medicineService.getMedicines();
  }

  @Post()
  @HttpCode(201)
  createMedicine(@Body() data: Prisma.MedicineCreateInput): Promise<Medicine> {
    return this.medicineService.createMedicine(data);
  }
}
