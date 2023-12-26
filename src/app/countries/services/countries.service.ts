import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {


  private apiUrl: string = 'https://restcountries.com/v3.1'
  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  }


  constructor(
    private http: HttpClient,

  ) {
    this.loadFromLocalStorage();
  }


  public searchCapital(term: string): Observable<Country[]> {
    return this.search('capital', term)
      .pipe(
        tap(countries => this.cacheStore.byCapital = { term, countries }),
        tap(() => this.saveToLocalStorage())
      )
  }

  public searchCountryByAlphaCode(term: string): Observable<Country | null> {
    return this.search('alpha', term)
      .pipe(
        map(countries => CountriesService.length > 0 ? countries[ 0 ] : null)
      )
  }

  public searchCountry(term: string): Observable<Country[]> {
    return this.search('name', term)
      .pipe(
        tap(countries => this.cacheStore.byCountries = { term, countries }),
        tap(() => this.saveToLocalStorage())
      )

  }

  public searchRegion(region: Region): Observable<Country[]> {
    return this.search('region', region)
      .pipe(
        tap(countries => this.cacheStore.byRegion = { region, countries }),
        tap(() => this.saveToLocalStorage())
      )
  }

  private search(filter: string, term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/${filter}/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([])),
        delay(1000)
      )
  }

  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore))
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);

  }

}
