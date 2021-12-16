import { Component, OnInit } from '@angular/core';
import { ListImagesComponent } from 'src/app/features/list-images/list-images.component';
import { MarsImagesService } from 'src/app/core/services/mars-images.service';
@Component({
  selector: 'app-photos-per-day',
  templateUrl: './photos-per-day.component.html',
  styleUrls: ['./photos-per-day.component.scss'],
})
export class PhotosPerDayComponent implements OnInit {
  marsPhotos: any;
  constructor(private MarsImagesService: MarsImagesService) {
    this.MarsImagesService = MarsImagesService;
  }

  ngOnInit(): void {
    this.marsPhotos = this.MarsImagesService.getMarsImagesFromAPI();
    console.log(this.marsPhotos);
  }
}
