import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tournament } from './tournaments.entity';
import { Team } from 'src/teams/teams.entity';

@Entity('tournament_teams')
export class TournamentTeam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'tournament_id' })
  tournamentId: number;

  @ManyToOne(() => Tournament)
  @JoinColumn({ name: 'tournament_id' })
  tournament: Tournament;

  @Column({ name: 'team_id' })
  teamId: number;

  @ManyToOne(() => Team)
  @JoinColumn({ name: 'team_id' })
  team: Team;

  @Column({ name: 'group_letter', nullable: true })
  groupLetter: string;
}
