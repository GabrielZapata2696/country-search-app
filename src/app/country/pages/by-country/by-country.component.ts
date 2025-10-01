import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchBar } from "../../components/country-search-bar/country-search-bar";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-country',
  imports: [CountrySearchBar, CountryListComponent],
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent {

  countryService = inject(CountryService);
  activatedRoute = inject(ActivatedRoute);

  // query = signal('')
  router = inject(Router);
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') || '';
  query = signal(this.queryParam);

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query) return of([]);
      this.router.navigate(['country/by-country'], { queryParams: { query: params.query } });
      return this.countryService.searchByCountry(params.query)
        ;
    },
  });

  // countryResource = resource({
  //   params: () => ({ query: this.query() }),
  //   loader: async ({ params }) => {

  //     if (!params.query) return [];

  //     return await firstValueFrom(
  //       this.countryService.searchByCountry(params.query)
  //     );

  //   },
  // });

}
