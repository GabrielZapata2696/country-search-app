import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-bar.html',
  styleUrl: './country-search-bar.css'
})
export class CountrySearchBar {
  // Input property for placeholder text
  placeholder = input('Buscar...');

  // Use Angular's Output and EventEmitter to emit the value
  search = output<string>();

  initialValue = input<string>('');

  // Signal to hold the input value
  inputValue = linkedSignal<string>(() => this.initialValue());


  // Effect to handle debounced search
  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.search.emit(value);
    }, 1000);

    onCleanup(() => clearTimeout(timeout));

  })

}
