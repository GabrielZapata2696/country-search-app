import { Country } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/rest-countries.interfaces";

export class CountryMapper {
  static mapRestCountryToCountry(restCountry: RESTCountry): Country {
    return {
      cca2: restCountry.cca2,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations["spa"].common,
      capital: restCountry.capital?.length ? restCountry.capital.join(',') : 'N/A',
      population: restCountry. population,
      official: restCountry.translations["spa"].official,
      region: restCountry.region,
      subregion: restCountry.subregion,
      languages: restCountry.languages ? Object.values(restCountry.languages).join(', ') : 'N/A',
      currencies: restCountry.currencies ? Object.values(restCountry.currencies).map(currency => currency.name).join(', ') : 'N/A',
      currencies_symbol: restCountry.currencies ? Object.values(restCountry.currencies).map(currency => currency.symbol).join(', ') : 'N/A',
      translations: restCountry.translations
    }
  }

  static mapRestCountryToCountryArray(restCountries: RESTCountry[]): Country[] {
    return restCountries.map(CountryMapper.mapRestCountryToCountry);
  }
}
