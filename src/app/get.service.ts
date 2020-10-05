import { ServerProxyService } from './server-proxy.service';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  private getItemRequest$: Observable<string>;

  constructor(private serverProxy: ServerProxyService) {
  }

  public getItem(id: string): Observable<string> {
    return this.serverProxy.connectionChanged$.pipe(
      switchMap(_ => from(this.serverProxy.getItem(id)))
    );
  }
}
