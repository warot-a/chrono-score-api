import { Module } from '@nestjs/common';
import { TournamentsController } from './tournaments.controller';
import { TournamentsService } from './tournaments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournament } from './tournaments.entity';
import { TournamentTeam } from './tournament-team.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tournament, TournamentTeam])],
  controllers: [TournamentsController],
  providers: [TournamentsService],
})
export class TournamentsModule {}
