import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrendingComponent } from './trending/trending.component';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';

import { ROUTES } from './app.routes';
import { GiphyService } from './giphy.service';
import { GifViewrComponent } from './gif-viewr/gif-viewr.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    SearchComponent,
    NavComponent,
    GifViewrComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
