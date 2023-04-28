import { Module } from '@nestjs/common';

import { CoreModule } from '@core/core.module';
import { PharmacyController } from './pharmacy.controller';
import { PharmacyService } from './pharmacy.service';

@Module({
  imports: [CoreModule],
  providers: [PharmacyService, PharmacyController],
})
export class PharmacyModule {}
