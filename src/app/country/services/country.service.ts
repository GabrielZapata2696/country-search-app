import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interfaces';
import { map, Observable, catchError, throwError, of, tap, delay } from 'rxjs';
import { CountryMapper } from '../Mapper/country.mapper';
import { Country } from '../interfaces/country.interface';


const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);
  private queryCacheCapital= new Map<string, Country[]>(); // Cache para búsquedas por capital
  private queryCacheCountry= new Map<string, Country[]>(); // Cache para búsquedas por país
  private queryCacheRegion = new Map<string, Country[]>(); // Cache para búsquedas por region



  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();
    if(this.queryCacheCapital.has(query)){
      return of(this.queryCacheCapital.get(query)!);
    }

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map(restCountries => CountryMapper.mapRestCountryToCountryArray(restCountries)),
        tap(countries => this.queryCacheCapital.set(query, countries)), // Almacenar en caché
        catchError(err => {
          return throwError(
            () => new Error('No se pudo obtener paises con ese valor')
          );
        })
      );
  }

  searchByCountry(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    if(this.queryCacheCountry.has(query)){
      return of(this.queryCacheCountry.get(query)!);
    }

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
      .pipe(
        map(restCountries => CountryMapper.mapRestCountryToCountryArray(restCountries)),
        tap(countries => this.queryCacheCountry.set(query, countries)), // Almacenar en caché
        delay(2000),
        catchError(err => {
          return throwError(
            () => new Error('No se pudo obtener paises con ese valor')
          );
        })
      );
  }

  searchCountryByAlphaCode(code: any): Observable<Country> {
    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`)
      .pipe(
        map(restCountries => CountryMapper.mapRestCountryToCountryArray(restCountries)),
        map(countries => countries[0]),
        catchError(err => {
          return throwError(
            () => new Error(`No se pudo obtener paises con ese valor: ${code} ---- Error: ${err}`)
          );
        })
      );
  }

  searchByRegion(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    if(this.queryCacheRegion.has(query)){
      return of(this.queryCacheRegion.get(query)!);
    }

    return this.http.get<RESTCountry[]>(`${API_URL}/region/${query}`)
      .pipe(
        map(restCountries => CountryMapper.mapRestCountryToCountryArray(restCountries)),
        tap(countries => this.queryCacheRegion.set(query, countries)), // Almacenar en caché
        catchError(err => {
          return throwError(
            () => new Error(`No se pudo obtener paises con ese valor: ${query} ` )
          );
        })
      );
  }
}
