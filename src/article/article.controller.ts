import {
  BadRequestException,
  Body,
  Controller,
  Inject,
  Post,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { Article } from './article';
import { ArticleRepository } from './article.repository';
import { ArticleDto } from './dto/article.dto';
class CreateArticlePayload {
  title: string;
  author: string;
  description: string;
  content: string;
  createdAt: Date;
}

@Controller()
export class ArticleController {
  constructor(private readonly _articleRepository: ArticleRepository) {}

  @Post()
  async create(@Body() payload: CreateArticlePayload): Promise<Article> {
    if (!payload.title) {
      throw new BadRequestException('No title was provided.');
    }

    return await this._articleRepository.create(
      payload.title,
      payload.author,
      payload.description,
      payload.content,
    );
  }

  @Get()
  async findAll(): Promise<Article[]> {
    return this._articleRepository.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return this._articleRepository.find(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() articleDto: ArticleDto) {
    return this._articleRepository.update(id, articleDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Body() articleDto: ArticleDto) {
    return this._articleRepository.delete(id, articleDto);
  }
}
