import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { Region } from '../../interfaces/country.interface';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';


function validaQueryRegion(query: string): Region {
  query = query.toLowerCase();
  const validRegions: Record<string, Region> = {
    'africa': 'Africa',
    'americas': 'Americas',
    'asia': 'Asia',
    'europe': 'Europe',
    'oceania': 'Oceania',
    'antarctic': 'Antarctic'
  };
  return validRegions[query] ?? 'Americas';
}


@Component({
  selector: 'app-by-region',
  imports: [CountryListComponent, RouterLinkActive],
  templateUrl: './by-region.component.html',
})
export class ByRegionComponent {

  countryService = inject(CountryService);
  activatedRoute = inject(ActivatedRoute);

  regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  router = inject(Router);
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('region') || '';
  selectedRegion = linkedSignal<Region>(() => validaQueryRegion(this.queryParam));

  countryResource = rxResource({
    params: () => ({ region: this.selectedRegion() }),
    stream: ({ params }) => {
      if (!params.region) return of([]);
      this.router.navigate(['country/by-region'], { queryParams: { query: params.region } });
      this.selectedRegion.set(params.region);
      return this.countryService.searchByRegion(params.region)
        ;
    },
  });

}
