import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Survey forms', url: '/form', icon: 'help-circle' },
    { title: 'Take Picture', url: '/picture', icon: 'camera' },
    { title: 'Verset Biblique', url: '/bibleverse', icon: 'book' },
    { title: 'Mon Profil', url: '/profil', icon: 'person' }
   
    
    ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
