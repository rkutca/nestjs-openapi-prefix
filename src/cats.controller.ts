import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { Cat } from './cat.interface';

@ApiTags('Cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiResponse({ status: 200, description: "Get all cats.", type: Cat })
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}