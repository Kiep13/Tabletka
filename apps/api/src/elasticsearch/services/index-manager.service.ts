import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

import { Indexes } from '@elastic/enums';

@Injectable()
export class IndexManagerService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  public insertDocumentIntoIndex(index: Indexes, body) {
    return this.elasticsearchService.index({
      index: index,
      body: body,
    });
  }
}
