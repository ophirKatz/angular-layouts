import { Ia } from './ia';
import { Ib } from './ib';
import { Injectable } from '@angular/core';

/*@Injectable({
  providedIn: 'root'
})*/
export class AService implements Ia, Ib {

  constructor() { }

  add(x: number, y: number): number {
    return x + y;
  }

  getHello(): string {
    return 'Hello from AService';
  }
}
