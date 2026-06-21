import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SportsService } from './sports.service';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';

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

  @Post()
  create(@Body() dto: CreateSportDto) {
    return this.sportsService.create(dto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateSportDto) {
    return this.sportsService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.sportsService.remove(id);
  }
}
