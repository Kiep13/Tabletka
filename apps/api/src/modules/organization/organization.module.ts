import { Module } from '@nestjs/common';

import { CoreModule } from '@core/core.module';
import { ElasticSearchModule } from '@elastic/elasticsearch.module';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';

@Module({
  imports: [
    CoreModule,
    ElasticSearchModule
  ],
  providers: [OrganizationService, OrganizationController],
})
export class OrganizationModule {}
