import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

import { CoreModule } from '@core/core.module';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';

@Module({
  imports: [
    CoreModule,
    ElasticsearchModule.register({
      node: 'http://localhost:9200',
    }),
  ],
  providers: [OrganizationService, OrganizationController],
})
export class OrganizationModule {}
