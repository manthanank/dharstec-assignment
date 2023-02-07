import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://randomuser.me/api'
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.url);
  }
}
