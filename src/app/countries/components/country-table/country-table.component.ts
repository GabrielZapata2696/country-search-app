import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: `
  img{
    width: 35px
  }
  `
})
export class CountryTableComponent implements AfterViewInit, OnChanges {

  @Input()
  public countries: Country[] = [];
  public pageSize = 5;
  public pageIndex = 0;
  public pageSizeOptions = [ 5, 10, 25 ];
  public displayedColumns: string[] = [ '#', 'icon', 'bandera', 'nombre', 'capital', 'poblacion', 'info' ];
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  public dataSource = new MatTableDataSource<Country>([]);

  public modoVista: boolean = true;

  constructor() { }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<Country>(this.countries);
    this.dataSource.data = this.countries;
    this.dataSource.paginator = this.paginator!;
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Country>(this.countries);
    this.dataSource.paginator = this.paginator!;
    this.dataSource.data = [];
    this.dataSource.data = this.countries;
  }


}
