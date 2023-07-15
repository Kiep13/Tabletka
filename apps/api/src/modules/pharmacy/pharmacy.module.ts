import { Module } from '@nestjs/common';

import { CoreModule } from '@core/core.module';
import { ElasticSearchModule } from '@elastic/elasticsearch.module';
import { PharmacyController } from './pharmacy.controller';
import { PharmacyService } from './pharmacy.service';

@Module({
  imports: [CoreModule, ElasticSearchModule],
  providers: [PharmacyService, PharmacyController],
})
export class PharmacyModule {}
