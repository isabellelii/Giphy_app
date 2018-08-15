import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Giphy app';
  private apiUrl = 'https://api.giphy.com/v1/gifs/trending?api_key=L3iR4JmiKlOmBfAVcg9lbH4Hgke1fDeo&limit=25&rating=G';
  data: any = {};

  constructor(private http: Http) {
    console.log('hey api is working');
    this.getAll();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl)
    .map((res: Response) => res.json())
  }

  getAll() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }
}
