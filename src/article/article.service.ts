import { ArticleRepository } from './article.repository';
import { ArticleNewDto } from './article-new.dto';
import { ArticleEntity } from './article.entity';
import { ArticleListParam } from './article-list.param';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleUpdateDto } from './article-update.dto';
import { ArticleDeleteDto } from './article-delete.dto';

export class ArticleService {
  constructor(
    @InjectRepository(ArticleRepository)
    private readonly articleRepository: ArticleRepository) {
  }

  async getAllArticles(param: ArticleListParam): Promise<ArticleEntity[]> {
    const { skip, take } = param;
    return await this.articleRepository.find({ skip, take });
  }

  async getArticleById(id: number): Promise<ArticleEntity> {
    return await this.articleRepository.findOneOrFail(id);
  }

  async create(dto: ArticleNewDto): Promise<ArticleEntity> {
    const article = this.articleRepository.create();
    article.title = dto.title;
    article.content = dto.content;
    return await this.articleRepository.save(article);
  }

  async update(dto: ArticleUpdateDto): Promise<ArticleEntity> {
    const article = this.articleRepository.create();
    article.id = dto.id;
    article.title = dto.title;
    article.content = dto.content;
    return await this.articleRepository.save(article);
  }

  async remove(dto: ArticleDeleteDto): Promise<ArticleEntity> {
    const article = await this.articleRepository.findOneOrFail(dto.id);
    await this.articleRepository.delete(dto.id);
    return article;
  }
}
