import { Module } from '@nestjs/common';

import { CoreModule } from '@core/core.module';
import { AssortmentController } from './assortment.controller';
import { AssortmentService } from './assortment.service';

@Module({
  imports: [CoreModule],
  providers: [AssortmentService, AssortmentController],
})
export class AssortmentModule {}
