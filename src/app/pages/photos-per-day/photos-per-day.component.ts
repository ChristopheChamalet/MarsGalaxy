import { Component, OnInit } from '@angular/core';
import { ListImagesComponent } from 'src/app/features/list-images/list-images.component';
import { MarsImagesService } from 'src/app/core/services/mars-images.service';
@Component({
  selector: 'app-photos-per-day',
  templateUrl: './photos-per-day.component.html',
  styleUrls: ['./photos-per-day.component.scss'],
})
export class PhotosPerDayComponent implements OnInit {
  constructor(private MarsImagesService: MarsImagesService) {
    this.MarsImagesService = MarsImagesService;
  }
  marsPhotos = [];
  dateJour: string | undefined;
  dateMonth: string | undefined;
  dateYear: string | undefined;


  ngOnInit(): void {
    this.MarsImagesService.getMarsImagesFromAPI().subscribe(
      (res) => {
        this.marsPhotos = res.photos;
        console.log(res.photos);
      },

      (error) => {
        console.log(error);
      }
    );
  }
}
