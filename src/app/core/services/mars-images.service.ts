import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotosPerDayComponent } from '../../pages/photos-per-day/photos-per-day.component';
@Injectable({
  providedIn: 'root',
})
export class MarsImagesService {
  dateJour: string | undefined;
  dateMonth: string | undefined;
  dateYear: string | undefined;

  apiUrl: string =
    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' +
    dateJour +
    '-' +
    dateMonth +
    '-' +
    dateYear +
    'api_key=t9Jkpe0Zk2BHQkjpQK3L5fjWTGCZ6nZ8u4eAN5yc';

  constructor(public http: HttpClient) {}

  getMarsImagesFromAPI() {
    return this.http.get<any>(this.apiUrl);
  }
}
