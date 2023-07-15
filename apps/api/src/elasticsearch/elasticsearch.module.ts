import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

import { IndexManagerService } from './services';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'http://localhost:9200',
    }),
  ],
  exports: [
    ElasticsearchModule,
    IndexManagerService
  ],
  providers: [
    IndexManagerService
  ]
})
export class ElasticSearchModule {}