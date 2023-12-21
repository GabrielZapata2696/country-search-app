import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {


  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(
    private http: HttpClient
  ) { }


  searchCapital(term: string): Observable<Country[]> {
    return this.search('capital', term)
  }

  searchCountryByAlphaCode(term: string): Observable<Country | null> {
    return this.search('alpha', term)
      .pipe(
        map(coutries => CountriesService.length > 0 ? coutries[ 0 ] : null)
      )
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.search('name', term)
  }

  searchRegion(term: string): Observable<Country[]> {
    return this.search('region', term)
  }

  search(filter: string, term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/${filter}/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      )
  }

}
