import { Component } from '@angular/core';
import { SearchingService } from './shared/services/searching.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countries';
  
  constructor(private searchingService: SearchingService) {}

  public setSearching(value: string) {
    this.searchingService.setSeaching(value);
  }
}
