import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubsService {

  private subs: Subscription[];

  constructor() {
  }
}
