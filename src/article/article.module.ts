import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleRepository } from './article.repository';
import { ArticleService } from './article.service';
import { ArticleResolver } from './article.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([ArticleRepository]),
  ],
  providers: [ArticleResolver, ArticleService],
})
export class ArticleModule {}
