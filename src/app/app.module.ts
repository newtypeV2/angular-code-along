import { FavoriteDirective } from './favorite.directive';
import { MediaItemComponent } from './media-item.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    FavoriteDirective
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}