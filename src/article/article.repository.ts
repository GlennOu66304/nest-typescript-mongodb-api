import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from './article';
import { ArticleDto } from './dto/article.dto';
@Injectable()
export class ArticleRepository {
  constructor(
    @InjectModel('Article')
    private readonly _articleModel: Model<Article>,
  ) {}
  // create a article
  async create(
    title: string,
    author: string,
    description: string,
    content: string,
  ): Promise<Article> {
    const existingArticle = await this._articleModel.findOne({ title });
    if (existingArticle) {
      throw new Error(`Article with title "${title}" already exists.`);
    }

    const createdAt = new Date();
    // mongoose create function
    // How to create one or many documents at once in Mongoose
    // https://www.educative.io/answers/how-to-create-one-or-many-documents-at-once-in-mongoose
    // Nodejs/mongoose. which approach is preferable to create a document?
    // https://stackoverflow.com/questions/9305987/nodejs-mongoose-which-approach-is-preferable-to-create-a-document
    return await this._articleModel.create({
      title,
      author,
      description,
      content,
      createdAt,
    });
  }

  async findAll(): Promise<Article[]> {
    return await this._articleModel.find().exec();
  }

  async find(id: string): Promise<Article> {
    return await this._articleModel.findById(id).exec();
  }

  async update(id: string, articleDto: ArticleDto): Promise<Article> {
    return await this._articleModel.findByIdAndUpdate(id, articleDto);
  }

  async delete(id: string): Promise<Article> {
    return await this._articleModel.findByIdAndRemove(id);
  }
}
