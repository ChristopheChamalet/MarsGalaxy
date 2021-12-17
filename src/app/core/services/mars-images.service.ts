import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotosPerDayComponent } from '../../pages/photos-per-day/photos-per-day.component';
@Injectable({
  providedIn: 'root',
})
export class MarsImagesService {
  dateJour: string = '';
  dateMonth: string = '';
  dateYear: string = '';

  apiUrl: string =
    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=t9Jkpe0Zk2BHQkjpQK3L5fjWTGCZ6nZ8u4eAN5yc';

  getDateJour() {
    return this.dateJour;
  }
  getDateMonth() {
    return this.dateMonth;
  }
  getDateYear() {
    return this.dateYear;
  }

  constructor(public http: HttpClient) {}

  changerDate(jour: any, mois: any, year: any) {
    this.dateJour = jour;
    this.dateMonth = mois;
    this.dateYear = year;
    this.apiUrl =
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' +
      this.dateYear +
      '-' +
      this.dateMonth +
      '-' +
      this.dateJour +
      '&api_key=t9Jkpe0Zk2BHQkjpQK3L5fjWTGCZ6nZ8u4eAN5yc';
  }

  getMarsImagesFromAPI() {
    return this.http.get<any>(this.apiUrl);
  }
}
