import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchBar } from "../../components/country-search-bar/country-search-bar";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-by-country',
  imports: [CountrySearchBar, CountryListComponent],
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent {

  countryService = inject(CountryService);

  query = signal('')

   countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query) return of([]);
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
