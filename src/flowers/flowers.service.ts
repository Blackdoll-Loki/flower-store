import { Injectable } from '@nestjs/common';

export interface FlowerObj{
  name: string,
  color: string,
  price: number
}

@Injectable()
export class FlowersService {
  findAll(): FlowerObj[]{
    return [
      {
        name: 'Rose',
        color: 'Red',
        price: 5,
      },
      {
        name: 'Lily',
        color: 'White',
        price: 6,
      },
      {
        name: 'Tulip',
        color: 'Yellow',
        price: 7,
      }
    ];
  }
}
