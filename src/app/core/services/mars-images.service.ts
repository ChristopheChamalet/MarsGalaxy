import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MarsImagesService {
  apikey: string = 'WX0wegdtk0UrrFGdYRC0Y086WtzbxC6ne5o6jdta';
  apiUrl: string =
    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=t9Jkpe0Zk2BHQkjpQK3L5fjWTGCZ6nZ8u4eAN5yc';

  constructor(public http: HttpClient) {}

  getMarsImagesFromAPI() {
    return this.http.get<any>(this.apiUrl);
  }
}
