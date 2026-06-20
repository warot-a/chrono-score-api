import { Injectable } from '@nestjs/common';

@Injectable()
export class SportsService {
  private readonly sports = [
    { id: 1, name: 'Football', slug: 'football' },
    { id: 2, name: 'Basketball', slug: 'basketball' },
  ];

  findAll() {
    return this.sports;
  }

  findOne(slug: string) {
    return this.sports.find((s) => s.slug === slug) ?? null;
  }
}
