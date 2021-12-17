import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalerieComponent } from './pages/galerie/galerie.component';
import { PhotosPerDayComponent } from './pages/photos-per-day/photos-per-day.component';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { ListImagesComponent } from './features/list-images/list-images.component';
import { ListImagesItemsComponent } from './features/list-images-items/list-images-items.component';
import { MarsImagesService } from './core/services/mars-images.service';
import { HttpClientModule } from '@angular/common/http';
import { MyGalleryService } from './core/services/my-gallery.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    GalerieComponent,
    PhotosPerDayComponent,
    HeaderComponent,
    FooterComponent,
    ListImagesComponent,
    ListImagesItemsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [MarsImagesService, MyGalleryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
