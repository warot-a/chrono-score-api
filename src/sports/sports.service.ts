import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sport } from './sports.entity';
import { Repository } from 'typeorm';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';

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

  create(dto: CreateSportDto) {
    const sport = this.repo.create(dto);
    return this.repo.save(sport);
  }

  async update(id: number, dto: UpdateSportDto) {
    await this.repo.update(id, dto);
    return this.repo.findOneBy({ id });
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
