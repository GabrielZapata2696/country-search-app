import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { NavigationItem } from '../../interfaces/navigationItem.interface';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  @ViewChild('drawer')
  public sidenav!: any;

  @Output() onCambioTema: EventEmitter<boolean> = new EventEmitter();

  sideNavItems!: NavigationItem[]

  constructor(
    private sharedService: SharedService
  ) {

  }

  ngOnInit(): void {

    this.setSideNavItems();

    this.sharedService.getToggleValue().subscribe((value) => {
      this.sidenav.toggle();
    });
  }

  setSideNavItems() {
    this.sideNavItems = [
      { nombre: 'By capital', url: 'countries/by-capital', icon: 'location_city' },
      { nombre: 'By country', url: 'countries/by-country', icon: 'south_america' },
      { nombre: 'By region', url: 'countries/by-region', icon: 'token' }
    ]
  }

  cambiarTema() {
    this.sharedService.cambiarTema = !this.sharedService.cambiarTema;
    this.onCambioTema.emit(this.sharedService.cambiarTema);
  }


}
