import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MarsImagesService {
  marsPhotos = [
    {
      id: '1',
      img_src: '../../../assets/img/getoffmars.jpeg',
    },
    {
      id: '2',
      img_src: '../../../assets/img/marslandscape.jpg',
    },
    { id: '3', img_src: '../../../assets/img/watermars.jpg' },
  ];

  apikey: string = 'WX0wegdtk0UrrFGdYRC0Y086WtzbxC6ne5o6jdta';
  apiUrl: string =
    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=t9Jkpe0Zk2BHQkjpQK3L5fjWTGCZ6nZ8u4eAN5yc';

  constructor(public http: HttpClient) {}

  async getMarsImagesFromAPI() {
    return (
      await this.http.get<any[]>(this.apiUrl).subscribe(
        (res) => {
          JSON.stringify(res);
          console.log(res);
        },

        (error) => {
          console.log(error);
        }
      ),
      setTimeout(() => 3000)
    );
  }
}
