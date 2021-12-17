import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyGalleryService {
  listImg:any[] = [] ;
  
  constructor() { }
  addPhoto(photo:any){
    this.listImg.push(photo);
  }
  getListImg(){
    return this.listImg;
  }

}
