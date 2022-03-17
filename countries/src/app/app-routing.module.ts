import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'countryList', pathMatch: 'full'
  },
  {
    path: 'countryList',
    loadChildren: () => import('./country-list/country-list.module').then(m => m.CountryListModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
