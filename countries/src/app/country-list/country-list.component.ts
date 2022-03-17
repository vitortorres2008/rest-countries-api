import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountryListService } from './country-list.service';
import { Country } from '../shared/country.interface';
import { SearchingService } from '../shared/services/searching.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit, OnDestroy {
  subCountry!: Subscription;
  countries!: Country[];
  searchTerm!: string;
  term!: string;

  constructor(
    private countryListService: CountryListService,
    private searchingService: SearchingService
  ) {}

  ngOnInit(): void {
    this.getCountry();
    this.getSearching();
  }

  ngOnDestroy(): void {
    this.subCountry.unsubscribe();
  }

  private getCountry() {
    this.subCountry = this.countryListService
      .getCountries()
      .subscribe((data: Country[]) => {
        this.countries = data;
      });
  }

  private getSearching() {
    this.searchingService.getSearch().subscribe((value: string) => {
      this.term = value;
    });
  }
}
