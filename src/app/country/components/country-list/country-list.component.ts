import { Component, input } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-countries.interfaces';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Country } from '../../interfaces/country.interface';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'country-list',
  imports: [CommonModule, DecimalPipe, RouterLink, ],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {
  countries = input.required<Country[]>();

  errorMessage = input<string| unknown | null>('') ;
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);




}
