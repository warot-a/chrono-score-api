import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Venue } from './venues.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VenuesService {
  constructor(
    @InjectRepository(Venue)
    private readonly repo: Repository<Venue>,
  ) {}

  findAll(): Promise<Venue[]> {
    return this.repo.find({ order: { name: 'ASC' } });
  }

  findOne(id: number): Promise<Venue | null> {
    return this.repo.findOneBy({ id });
  }
}
