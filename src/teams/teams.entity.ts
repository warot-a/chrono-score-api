import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('teams')
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  flag: string;

  @Column({ name: 'country_code' })
  countryCode: string;

  @Column({ default: 70 })
  strength: number;
}
