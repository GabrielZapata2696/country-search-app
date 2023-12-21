import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public placeholder: string = 'ej Europe';

  public countries: Country[] = [];

  constructor(
    private countriesService: CountriesService
  ) { }


  searchByRegion(termino: string) {
    this.countriesService.searchRegion(termino)
      .subscribe(resp => {
        this.countries = resp;
      });
  }





}
