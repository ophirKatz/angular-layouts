import { Injectable } from '@angular/core';
import { Config } from './config.decorator';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  private static fetchConfig(
    path: string,
    target: Object,
    key: string | symbol,
    http: HttpClient)
    : void {
    http.get(path).toPromise().then((response) => {
      target[key] = response;
    });
  }

  @Config({
    path: './assets/config.json'
  }) someProp: any;
}
