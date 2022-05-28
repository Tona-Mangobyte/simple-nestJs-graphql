import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ArticleDeleteDto {
  @Field()
  id: number;
}
