import { Component, Input, ViewChild } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: `
  img{
    width: 35px
  }
  `
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];
  public pageSize = 10;
  public pageIndex = 0;
  public pageSizeOptions = [ 5, 10, 25 ];
  public displayedColumns: string[] = [ '#', 'icon', 'bandera', 'nombre', 'capital', 'poblacion', 'info' ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // public dataSource?: any;
  public dataSource = new MatTableDataSource<Country>([]);


  ngAfterViewInit() {

    this.dataSource = new MatTableDataSource(this.countries);
    // this.dataSource = this.countries;
    this.dataSource.paginator = this.paginator!;
  }
}
