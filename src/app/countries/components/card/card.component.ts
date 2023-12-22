import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'country-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  constructor(
    private sanitization: DomSanitizer
  ) { }

  @Input()
  public country!: Country;

  sanitizarImagen() {
    return this.sanitization.bypassSecurityTrustStyle(`url(${this.country.flags.png}) `);
  }

}
