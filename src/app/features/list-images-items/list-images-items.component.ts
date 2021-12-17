import { Component, Input, OnInit } from '@angular/core';
import { ListImagesComponent } from '../list-images/list-images.component';
import { MarsImagesService } from '../../core/services/mars-images.service';
import { MyGalleryService } from 'src/app/core/services/my-gallery.service';


@Component({
  selector: 'app-list-images-items',
  templateUrl: './list-images-items.component.html',
  styleUrls: ['./list-images-items.component.scss'],
})
export class ListImagesItemsComponent implements OnInit {
  @Input() photosMars: any = {};
  @Input() listItem : any;
  @Input() afficherButton : boolean = true;
  

  constructor(private MyGalleryService : MyGalleryService) {
    this.MyGalleryService = MyGalleryService;
  }

  

  ngOnInit(): void {}
  clickToAdd(){
    this.MyGalleryService.addPhoto(this.photosMars)
    
  }
}
