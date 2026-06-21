import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Match } from './matches.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterMatchesDto } from './dto/filter-matches.dto';

@Injectable()
export class MatchesService {
  constructor(
    @InjectRepository(Match) private readonly repo: Repository<Match>,
  ) {}

  findAll(filters: FilterMatchesDto): Promise<Match[]> {
    const qb = this.repo.createQueryBuilder('match');

    if (filters.status) {
      qb.andWhere('match.status = :status', { status: filters.status });
    }

    if (filters.stage) {
      qb.andWhere('match.stage = :stage', { stage: filters.stage });
    }

    if (filters.group) {
      qb.andWhere('match.group_letter = :group', { group: filters.group });
    }

    if (filters.date) {
      qb.andWhere('DATE(match.scheduled_at) = :date', { date: filters.date });
    }

    return qb.orderBy('match.scheduled_at', 'ASC').getMany();
  }
}
