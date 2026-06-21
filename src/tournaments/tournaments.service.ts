import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tournament } from './tournaments.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TournamentsService {
  constructor(
    @InjectRepository(Tournament)
    private readonly repo: Repository<Tournament>,
  ) {}

  findAll(): Promise<Tournament[]> {
    return this.repo.find({ order: { startDate: 'DESC' } });
  }

  findOne(slug: string): Promise<Tournament | null> {
    return this.repo.findOneBy({ slug });
  }
}
