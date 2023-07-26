import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-bibleverse',
  templateUrl: './bibleverse.page.html',
  styleUrls: ['./bibleverse.page.scss'],
})
export class BibleversePage implements OnInit {

  listverses: any[] = [];
  constructor() {
    this.getListVerses();
  }
  getListVerses() {
    const apiURL = 'https://bible-api.com/john 3:1-36?verse_numbers=true';

    axios.get(apiURL)
      .then(response => {console.log(response);
        this.listverses = response.data.verses
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des versets:', error);
      });
  }


  ngOnInit() {
  }

}
