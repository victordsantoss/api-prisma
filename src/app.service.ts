import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) { }

  getHello(): string {
    return 'Hello World!';
  }

  async getUsers() {
    return this.prisma.tb_user.findMany({
      take: 10,
      select: {
        id: true,
        name: true,
        email: true,
        is_active: true,
        created_at: true,
      },
    });
  }

  async getProducts() {
    return this.prisma.tb_product.findMany({
      take: 10,
      select: {
        id: true,
        name: true,
        code: true,
        description: true,
        created_at: true,
      },
    });
  }
}
