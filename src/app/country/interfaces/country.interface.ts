export interface Country {
  cca2: string;
  flagSvg: string;
  official: string;
  name: string;
  capital: string;
  population: number;
  region: string;
  subregion: string;
  languages: string;
  currencies: string;
  currencies_symbol: string;
  translations: { [key: string]: { official: string; common: string } };

}

export type Region =
  | 'Africa'
  | 'Americas'
  | 'Asia'
  | 'Europe'
  | 'Oceania'
  | 'Antarctic';


