import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';

import { CoreModule } from './core/core.module';
import { MedicineModule } from './modules/medicine/medicine.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    CoreModule,
    MedicineModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: true
    }),
  ],
  controllers: [AppController]
})
export class AppModule {}
