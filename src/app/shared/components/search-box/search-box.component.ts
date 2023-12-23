import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @ViewChild('txtInput')
  public searchInput!: ElementRef<HTMLInputElement>;

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;
  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();


  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(700)
      )
      .subscribe(value => {
        this.onDebounce.emit(value)
      })

  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  emitValue(): void {
    let value: string = this.searchInput.nativeElement.value.toLowerCase();
    value = value.trim();
    this.searchInput.nativeElement.value = '';
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);

  }

}
