import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { delay, first } from 'rxjs/operators';

import { sleep } from './sleep';

@Injectable({
  providedIn: 'root'
})
export class ServerProxyService {

  private connectionChanged: Subject<boolean> = new BehaviorSubject<boolean>(false);
  public connectionChanged$: Observable<boolean> = this.connectionChanged;
  public onConnectedDoOnce$: Observable<boolean> = this.connectionChanged$.pipe(first());
  public connectionStatus: boolean = false;

  constructor() {
    setInterval(
      () => {
        const connectionStatus = this.randomValue();
        console.log('connection status: ', connectionStatus);
        this.connectionStatus = connectionStatus;
        this.connectionChanged.next(connectionStatus);
      },
      8000
    );
  }

  private randomValue(): boolean {
    return Math.random() >= 0.5;
  }

  public async getItem(id: string): Promise<string> {
    if (!this.connectionStatus) return null;
    await sleep(2000);
    return `item ${id}`;
  }
}
