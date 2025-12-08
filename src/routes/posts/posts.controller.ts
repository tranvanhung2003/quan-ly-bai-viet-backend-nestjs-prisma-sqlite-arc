import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AuthType, ConditionGuard } from 'src/shared/constants/auth.constant';
import { Auth } from 'src/shared/decorators/auth.decorator';
import { User } from 'src/shared/decorators/user.decorator';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @Auth([AuthType.BEARER, AuthType.API_KEY], { condition: ConditionGuard.OR })
  getPosts(@User('userId') userId: number) {
    return this.postsService.getPosts(userId);
  }

  @Post()
  @Auth([AuthType.BEARER, AuthType.API_KEY])
  createPost(@Body() body: any, @User('userId') userId: number) {
    return this.postsService.createPost(body, userId);
  }

  @Get(':id')
  getPost(@Param('id') id: string) {
    return this.postsService.getPost(id);
  }

  @Put(':id')
  updatePost(@Param('id') id: string, @Body() body: any) {
    return this.postsService.updatePost(id, body);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.postsService.deletePost(id);
  }
}
