import { Component, Input, OnInit } from '@angular/core';
import { ListImagesComponent } from '../list-images/list-images.component';
import { MarsImagesService } from '../../core/services/mars-images.service';

@Component({
  selector: 'app-list-images-items',
  templateUrl: './list-images-items.component.html',
  styleUrls: ['./list-images-items.component.scss'],
})
export class ListImagesItemsComponent implements OnInit {
  @Input() photosMars: any = {};
  constructor() {}

  ngOnInit(): void {}
}
