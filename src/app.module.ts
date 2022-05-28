import { Module } from '@nestjs/common';
import { RecipesModule } from './recipes/recipes.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    RecipesModule,
    /*GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      playground: true,
      debug: true
    }),*/
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: true,
      playground: true,
      debug: true,
      include: [RecipesModule],
    }),
  ],
})
export class AppModule {}
