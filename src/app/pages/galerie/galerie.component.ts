import { Component, Input, OnInit } from '@angular/core';
import { MyGalleryService } from 'src/app/core/services/my-gallery.service';
@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss']
})
export class GalerieComponent implements OnInit {
  @Input() photosMars: any;
  @Input() listItem : any;
  @Input() afficherButton : boolean = false;
  

  constructor(private MyGalleryService : MyGalleryService) {
    this.MyGalleryService = MyGalleryService;
  }

  ngOnInit(): void {
    this.listItem = this.MyGalleryService.getListImg();
  }
  clickToAdd(){
    this.MyGalleryService.addPhoto(this.photosMars)
  }

}
