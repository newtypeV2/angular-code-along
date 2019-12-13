import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mediaItems = [
    {id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science Fiction',
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false
    },
    {
      id: 2,
      name: 'Inception',
      medium: 'Movie',
      category: 'Fiction',
      year: 2014,
      watchedOn: 999999,
      isFavorite: true
    },
    {
      id: 3,
      name: 'Rainbow 6',
      medium: 'Series',
      category: 'Fiction',
      year: 2012,
      watchedOn: 124,
      isFavorite: false
    }
  ];

  onMediaItemDelete = (mediaItem) => {
    console.log(mediaItem);
  }

  passedFunc = (e) => {
    console.log("HEY! I JUST PASSED A FUNCTION!","EVENTINFO: ",e)
  }
}
