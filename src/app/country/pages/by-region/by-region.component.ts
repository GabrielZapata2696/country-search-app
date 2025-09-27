import { Component, inject, signal } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { Region } from '../../interfaces/country.interface';
import { RouterLinkActive } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';


@Component({
  selector: 'app-by-region',
  imports: [CountryListComponent, RouterLinkActive],
  templateUrl: './by-region.component.html',
})
export class ByRegionComponent {

  countryService = inject(CountryService);

  regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  selectedRegion = signal<Region | null>(null);


  countryResource = rxResource({
    params: () => ({ query: this.selectedRegion() }),
    stream: ({ params }) => {
      if (!params.query) return of([]);
      return this.countryService.searchByRegion(params.query)
        ;
    },
  });

 }
