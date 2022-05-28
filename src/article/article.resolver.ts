import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ArticleService } from './article.service';
import { ArticleListParam } from './article-list.param';
import { ArticleEntity } from './article.entity';
import { ArticleNewDto } from './article-new.dto';
import { ArticleUpdateDto } from './article-update.dto';
import { ArticleDeleteDto } from './article-delete.dto';

@Resolver(of => ArticleEntity)
export class ArticleResolver {
  constructor(private readonly articleService: ArticleService) {}

  @Query(returns => [ArticleEntity])
  async articles(@Args() articleListParam: ArticleListParam): Promise<ArticleEntity[]> {
    return await this.articleService.getAllArticles(articleListParam);
  }

  @Query(returns => ArticleEntity)
  async article(@Args('id') id: number): Promise<ArticleEntity> {
    return await this.articleService.getArticleById(id);
  }

  @Mutation(returns => ArticleEntity)
  async createArticle(@Args('article') articleNewDto: ArticleNewDto): Promise<ArticleEntity> {
    return await this.articleService.create(articleNewDto);
  }

  @Mutation(returns => ArticleEntity)
  async updateArticle(@Args('article') articleUpdateDto: ArticleUpdateDto): Promise<ArticleEntity> {
    return await this.articleService.update(articleUpdateDto);
  }

  @Mutation(returns => ArticleEntity)
  async deleteArticle(@Args('article') articleDeleteDto: ArticleDeleteDto): Promise<ArticleEntity> {
    return await this.articleService.remove(articleDeleteDto);
  }
}
