import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ArticleUpdateDto {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;
}
