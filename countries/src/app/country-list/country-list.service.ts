import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../shared/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryListService {

  private url: string = `${environment.url}`

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]>{
    return this.http.get<Country[]>(this.url)
  }
}

