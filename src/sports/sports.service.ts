import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sport } from './sports.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SportsService {
  constructor(
    @InjectRepository(Sport) private readonly repo: Repository<Sport>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  findOne(slug: string) {
    return this.repo.findOneBy({ slug });
  }
}
