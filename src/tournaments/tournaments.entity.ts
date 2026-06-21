import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tournaments')
export class Tournament {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'sport_id' })
  sportId: number;

  @Column()
  name: string;

  @Column({ unique: true })
  slug: string;

  @Column()
  season: string;

  @Column({ name: 'start_date', nullable: true, type: 'date' })
  startDate: string;

  @Column({ name: 'end_date', nullable: true, type: 'date' })
  endDate: string;

  @Column({ name: 'external_id' })
  externalId: string;

  @Column({ type: 'jsonb', nullable: true })
  config: Record<string, unknown>;
}
