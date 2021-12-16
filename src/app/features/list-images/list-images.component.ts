import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { PhotosPerDayComponent } from '../../pages/photos-per-day/photos-per-day.component';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.scss'],
})
export class ListImagesComponent implements OnInit {
  @Input() marsPhotos: {
    id: string;
    img_src: string;
    sol: number;
    cameras: string[];
    earth_date: Date;
  }[] = [];

  constructor(private PhotosPerDaysComponent: PhotosPerDayComponent) {}

  ngOnInit(): void {}
}
