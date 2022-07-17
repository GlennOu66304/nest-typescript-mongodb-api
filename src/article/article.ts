import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
class ArticleDocument {
  @Prop()
  title: string;

  @Prop()
  author: String;

  @Prop()
  description: string;

  @Prop()
  content: String;

  @Prop()
  createdAt: Date;
}

export type Article = ArticleDocument & Document;

export const articleSchema = SchemaFactory.createForClass(ArticleDocument);