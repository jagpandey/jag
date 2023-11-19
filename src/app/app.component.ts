import { Component } from '@angular/core';
import { ApnapediaService } from './apnapedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages:any=[]

  constructor(private ap:ApnapediaService){}
 

  onSearch(value: string){
    console.log(value)
    this.ap.wikiSearch(value).subscribe(vada => {

      console.log(vada)

      this.pages=vada
      this.pages = this.pages.query.search;
      
      console.log(this.pages);
    }
    );
  }
}
