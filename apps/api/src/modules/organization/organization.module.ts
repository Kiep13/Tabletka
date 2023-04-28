import { Module } from '@nestjs/common';

import { CoreModule } from '../../core/core.module';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';

@Module({
  imports: [CoreModule],
  providers: [OrganizationService, OrganizationController],
})
export class OrganizationModule {}
