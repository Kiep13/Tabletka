import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';

import { CoreModule } from '@core/core.module';
import { AssortmentModule } from '@modules/assortment';
import { MedicineModule } from '@modules/medicine';
import { OrganizationModule } from '@modules/organization';
import { PharmacyModule } from '@modules/pharmacy';
import { ElasticSearchModule } from '@elastic/elasticsearch.module';
import { AppController } from './app.controller';

export const ENTITY_MODULES = [
  AssortmentModule,
  MedicineModule,
  OrganizationModule,
  PharmacyModule
]

@Module({
  imports: [
    CoreModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: true
    }),
    ElasticSearchModule,
    ...ENTITY_MODULES
  ],
  controllers: [AppController]
})
export class AppModule {}
