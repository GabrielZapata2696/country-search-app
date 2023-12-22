import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'country-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements AfterViewInit, OnChanges {


  public length: number = 0;
  public pageSize: number = 3;  //displaying three cards each row
  public pageSizeOptions: number[] = [ 3, 6, 9, 12 ];

  public countryList: MatTableDataSource<Country> = new MatTableDataSource<Country>([]);
  public breakpoint: number = 3;  //to adjust to screen
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @Input()
  public countries!: Country[];
  public obsDataGrid?: Observable<any>;

  ngOnChanges(changes: SimpleChanges): void {
    this.countryList.data = this.countries;
    this.countryList.paginator = this.paginator!;
    this.obsDataGrid = this.countryList.connect();
  }

  ngAfterViewInit(): void {
    this.countryList.data = this.countries;
    this.countryList.paginator = this.paginator!;
    this.obsDataGrid = this.countryList.connect();
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }


}
