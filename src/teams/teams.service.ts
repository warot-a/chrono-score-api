import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Team } from './teams.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private readonly repo: Repository<Team>,
  ) {}

  findAll(): Promise<Team[]> {
    return this.repo.find({
      order: { name: 'ASC' },
    });
  }

  findOne(code: string): Promise<Team | null> {
    return this.repo.findOneBy({ code });
  }
}
