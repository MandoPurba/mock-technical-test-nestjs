import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';

@Controller('api/v1/books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  all() {
    return this.bookService.all();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.bookService.getById(+id);
  }

  @Post()
  async add(@Body() body: { name: string; type: string }) {
    return await this.bookService.create({
      name: body.name,
      type: body.type,
    });
  }

  @Put(':id')
  async edit(
    @Param('id') id: number,
    @Body() Body: { name?: string; type?: string },
  ) {
    return await this.bookService.update(+id, {
      name: Body.name,
      type: Body.type,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.bookService.delete(+id);
  }
}
