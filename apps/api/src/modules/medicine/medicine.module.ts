import { Module } from '@nestjs/common';

import { CoreModule } from '@core/core.module';
import { ElasticSearchModule } from '@elastic/elasticsearch.module';
import { MedicineController } from './medicine.controller';
import { MedicineService } from './medicine.service';

@Module({
  imports: [CoreModule, ElasticSearchModule],
  providers: [MedicineService, MedicineController],
})
export class MedicineModule {}
