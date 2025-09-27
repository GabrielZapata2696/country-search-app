import { Component, input, OnInit } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-information',
  imports: [DecimalPipe],
  templateUrl: './country-information.component.html',
})
export class CountryInformationComponent implements OnInit {

  country = input.required<Country>();
  Object: any;
  translationsArray: { lang: string; official: string; common: string }[] = [];


  ngOnInit() {

    this.translationsArray = Object.entries(this.country().translations)
      .filter(([key]) => ['deu', 'fra', 'ita', 'jpn', 'rus', 'por'].includes(key))
      .map(([key, value]) => ({
        lang: key,
        official: value.official,
        common: value.common
      }));
  }

}
