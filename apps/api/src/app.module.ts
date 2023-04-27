import { Module } from '@nestjs/common';

import { CoreModule } from './core/core.module';
import { MedicineModule } from './modules/medicine/medicine.module';
import { AppController } from './app.controller';

@Module({
  imports: [CoreModule,MedicineModule],
  controllers: [AppController]
})
export class AppModule {}
