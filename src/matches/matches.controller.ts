import { Controller, Get, Query } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { FilterMatchesDto } from './dto/filter-matches.dto';

@Controller('matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  @Get()
  findAll(@Query() filters: FilterMatchesDto) {
    return this.matchesService.findAll(filters);
  }
}
