import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { TournamentsService } from './tournaments.service';

@Controller('tournaments')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @Get()
  findAll() {
    return this.tournamentsService.findAll();
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
    const tournament = await this.tournamentsService.findBySlug(slug);
    if (!tournament) {
      throw new NotFoundException();
    }

    return tournament;
  }

  @Get(':slug/teams')
  async findTeams(@Param('slug') slug: string) {
    const tournament = await this.tournamentsService.findBySlug(slug);

    if (!tournament) {
      throw new NotFoundException();
    }

    return this.tournamentsService.findTeamsBySlug(slug);
  }

  @Get(':slug/matches')
  async findMatches(@Param('slug') slug: string) {
    const tournament = await this.tournamentsService.findBySlug(slug);
    if (!tournament) {
      throw new NotFoundException();
    }

    return this.tournamentsService.findMatchesBySlug(slug);
  }
}
