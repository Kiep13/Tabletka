import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';

import { CoreModule } from '@core/core.module';
import { MedicineModule } from '@modules/medicine';
import { OrganizationModule } from '@modules/organization';
import { AppController } from './app.controller';

export const ENTITY_MODULES = [
  MedicineModule,
  OrganizationModule
]

@Module({
  imports: [
    CoreModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: true
    }),
    ...ENTITY_MODULES
  ],
  controllers: [AppController]
})
export class AppModule {}
