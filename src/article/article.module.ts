import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleController } from './article.controller';
import { ArticleRepository } from './article.repository';
import { articleSchema } from './article';

@Module({
  controllers: [ArticleController],
  exports: [],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Article',
        schema: articleSchema,
      },
    ]),
  ],
  providers: [ArticleRepository],
})
export class ArticleModule {}
