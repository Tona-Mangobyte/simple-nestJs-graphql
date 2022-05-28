import { Module } from '@nestjs/common';
import { RecipesModule } from './recipes/recipes.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { resolve } from "path";
import { ArticleModule } from './article/article.module';
import { ArticleRepository } from './article/article.repository';

@Module({
  imports: [
    ConfigModule.load(resolve(__dirname, '../config', '**/!(*.d).{ts,js}')),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    RecipesModule,
    ArticleModule,
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
      include: [RecipesModule, ArticleModule],
    }),
  ],
})
export class AppModule {}
