import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CountryListRoutingModule } from './country-list-routing.module';
import { CountryListComponent } from './country-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CountryListComponent
  ],
  imports: [
    CommonModule,
    CountryListRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class CountryListModule { }
