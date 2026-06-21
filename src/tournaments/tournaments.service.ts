import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tournament } from './tournaments.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TournamentTeam } from './tournament-team.entity';
import { Match } from 'src/matches/matches.entity';

@Injectable()
export class TournamentsService {
  constructor(
    @InjectRepository(Tournament)
    private readonly tournamentRepo: Repository<Tournament>,
    @InjectRepository(TournamentTeam)
    private readonly tournamentTeamRepo: Repository<TournamentTeam>,
  ) {}

  findAll(): Promise<Tournament[]> {
    return this.tournamentRepo.find({ order: { startDate: 'DESC' } });
  }

  findBySlug(slug: string): Promise<Tournament | null> {
    return this.tournamentRepo.findOneBy({ slug });
  }

  findTeamsBySlug(slug: string): Promise<TournamentTeam[]> {
    // SELECT tt.*, t.*
    // FROM tournament_teams tt
    //    JOIN tournaments tr ON tt.tournament_id = tr.id
    //    JOIN teams t ON tt.team_id = t.id
    // WHERE tr.slug = 'worldcup-2026'
    // ORDER BY tt.group_letter ASC;
    return this.tournamentTeamRepo.find({
      where: { tournament: { slug } },
      relations: { team: true },
      order: { groupLetter: 'ASC' },
    });
  }

  findMatchesBySlug(slug: string) {
    return this.tournamentTeamRepo.manager.find(Match, {
      where: { tournament: { slug } },
      relations: { homeTeam: true, awayTeam: true, venue: true },
      order: { scheduledAt: 'ASC' },
    });
  }
}
