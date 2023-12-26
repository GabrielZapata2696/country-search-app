import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public placeholder: string = 'ej. Canada...';
  public isLoading: boolean = false;
  public initialValue: string = '';
  public countries: Country[] = [];

  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries!;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry(termino: string) {
    this.isLoading = true;
    this.countriesService.searchCountry(termino)
      .subscribe(resp => {
        this.countries = resp;
        this.isLoading = false;
      });

  }

}
