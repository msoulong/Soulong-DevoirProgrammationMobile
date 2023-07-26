import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.page.html',
  styleUrls: ['./picture.page.scss'],
})
export class PicturePage implements OnInit {
  public  photos: UserPhoto[] = [];

  
   constructor(public photoService: PhotoService) { }

   public addPhotoToGallery() {
    this.photoService.addNewToGallery();
    
   }

  ngOnInit() {
  }

 
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}