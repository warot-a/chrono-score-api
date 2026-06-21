import { Team } from 'src/teams/teams.entity';
import { Tournament } from 'src/tournaments/tournaments.entity';
import { Venue } from 'src/venues/venues.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('matches')
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'tournament_id' })
  tournamentId: number;

  @ManyToOne(() => Tournament)
  @JoinColumn({ name: 'tournament_id' })
  tournament: Tournament;

  @Column({ name: 'external_id', nullable: true })
  externalId: string;

  @Column({ nullable: true })
  stage: string;

  @Column({ name: 'round_name', nullable: true })
  roundName: string;

  @Column({ name: 'group_letter', nullable: true })
  groupLetter: string;

  @Column({ name: 'home_team_id', nullable: true })
  homeTeamId: number;

  @ManyToOne(() => Team)
  @JoinColumn({ name: 'home_team_id' })
  homeTeam: Team;

  @Column({ name: 'away_team_id', nullable: true })
  awayTeamId: number;

  @ManyToOne(() => Team)
  @JoinColumn({ name: 'away_team_id' })
  awayTeam: Team;

  @Column({ name: 'venue_id', nullable: true })
  venueId: number;

  @ManyToOne(() => Venue)
  @JoinColumn({ name: 'venue_id' })
  venue: Venue;

  @Column({ name: 'scheduled_at', nullable: true, type: 'timestamptz' })
  scheduledAt: Date;

  @Column({ default: 'SCHEDULED' })
  status: string;

  @Column({ name: 'home_score', nullable: true })
  homeScore: number;

  @Column({ name: 'away_score', nullable: true })
  awayScore: number;
}
