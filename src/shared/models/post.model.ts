import { Post } from '@prisma/client';
import { Type } from 'class-transformer';
import { UserModel } from './user.model';

export class PostModel implements Post {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
  @Type(() => UserModel)
  author?: UserModel;

  constructor(partial: Partial<PostModel>) {
    Object.assign(this, partial);
  }

  static fromArray(posts: Partial<PostModel>[]) {
    return posts.map((post) => new PostModel(post));
  }
}
