import { Controller, Get, Param } from '@nestjs/common';
import { SportsService } from './sports.service';

@Controller('sports')
export class SportsController {
  constructor(private readonly sportsService: SportsService) {}

  @Get()
  findAll() {
    return this.sportsService.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.sportsService.findOne(slug);
  }
}
