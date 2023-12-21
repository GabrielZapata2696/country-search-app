import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @ViewChild('txtInput')
  public searchInput!: ElementRef<HTMLInputElement>;

  emitValue(): void {
    let value: string = this.searchInput.nativeElement.value.toLowerCase();
    value = value.trim();
    this.searchInput.nativeElement.value = '';
    this.onValue.emit(value);
  }

}
