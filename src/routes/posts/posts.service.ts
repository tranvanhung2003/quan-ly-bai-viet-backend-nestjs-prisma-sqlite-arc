/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async getPosts() {
    return await this.prisma.post.findMany();
  }

  async createPost(body: any, userId: number) {
    return await this.prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });
  }

  async getPost(id: string) {
    return await this.prisma.post.findUnique({ where: { id: Number(id) } });
  }

  async updatePost(id: string, body: any) {
    return await this.prisma.post.update({
      where: { id: Number(id) },
      data: {
        title: body.title,
        content: body.content,
        authorId: body.authorId,
      },
    });
  }

  async deletePost(id: string) {
    return await this.prisma.post.delete({ where: { id: Number(id) } });
  }
}
