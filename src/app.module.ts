import { Module } from '@nestjs/common';
import { RecipesModule } from './recipes/recipes.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleRepository } from './article/article.repository';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { resolve } from "path";

@Module({
  imports: [
    ConfigModule.load(resolve(__dirname, '../config', '**/!(*.d).{ts,js}')),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([ArticleRepository]),
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
