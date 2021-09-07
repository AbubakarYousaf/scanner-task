import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  API_URL = 'https://mocki.io/v1/';
  constructor(private http: HttpClient) { }

 httpGet (ep = '') {
  return this.http.get<any>(this.API_URL+ep);
 }
}
