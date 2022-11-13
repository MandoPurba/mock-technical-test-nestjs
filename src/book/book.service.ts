import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  all() {
    return this.prisma.book.findMany();
  }

  getById(id: number) {
    return this.prisma.book.findFirst({
      where: {
        id,
      },
    });
  }

  async create(data: Prisma.BookCreateInput) {
    return await this.prisma.book.create({
      data,
    });
  }

  async update(id: number, data: Prisma.BookUpdateInput) {
    return await this.prisma.book.update({
      where: {
        id,
      },
      data,
    });
  }

  delete(id: number) {
    return this.prisma.book.delete({
      where: {
        id,
      },
    });
  }
}
