import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public placeholder: string = 'ej. Bogotá...';
  public isLoading: boolean = false;
  public countries: Country[] = [];

  constructor(
    private countriesService: CountriesService
  ) { }


  searchByCapital(termino: string) {
    this.isLoading = true;
    this.countriesService.searchCapital(termino)
      .subscribe(resp => {
        this.countries = [];
        this.countries = resp;
        this.isLoading = false;
      });

  }

  reiniciarTabla() {
    this.countries = [];
  }

}
