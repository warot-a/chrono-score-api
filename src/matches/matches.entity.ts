import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('matches')
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'tournament_id' })
  tournamentId: number;

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

  @Column({ name: 'away_team_id', nullable: true })
  awayTeamId: number;

  @Column({ name: 'venue_id', nullable: true })
  venueId: number;

  @Column({ name: 'scheduled_at', nullable: true, type: 'timestamptz' })
  scheduledAt: Date;

  @Column({ default: 'SCHEDULED' })
  status: string;

  @Column({ name: 'home_score', nullable: true })
  homeScore: number;

  @Column({ name: 'away_score', nullable: true })
  awayScore: number;
}
