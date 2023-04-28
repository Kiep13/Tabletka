import { Module } from '@nestjs/common';

import { CoreModule } from '@core/core.module';
import { MedicineController } from './medicine.controller';
import { MedicineService } from './medicine.service';

@Module({
  imports: [CoreModule],
  providers: [MedicineService, MedicineController],
})
export class MedicineModule {}
