import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  config: Config = new Config

  post(path, params, func){
    this.http.post(this.config.host + path, params, {withCredentials: true}).subscribe(func)
  }

  get(path, func){
    this.http.get(this.config.host + path, {withCredentials: true}).subscribe(func)
  }
}
