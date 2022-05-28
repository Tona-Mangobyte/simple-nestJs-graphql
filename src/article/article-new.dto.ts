import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ArticleNewDto {
  @Field()
  title: string;

  @Field()
  content: string;
}
