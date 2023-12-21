import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public placeholder: string = 'ej. Canadá...';

  public countries: Country[] = [];

  constructor(
    private countriesService: CountriesService
  ) { }


  searchByCountry(termino: string) {
    this.countriesService.searchCountry(termino)
      .subscribe(resp => {
        this.countries = resp;
      });

  }

}
