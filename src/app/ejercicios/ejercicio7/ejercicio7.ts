import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

/**
 * @title Require an autocomplete option to be selected
 */
@Component({
  selector: 'autocomplete-require-selection-example',
  templateUrl: './ejercicio7.html',
  styleUrls: ['./ejercicio7.css'], 
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
})
export class AutocompleteRequireSelectionExample {
  @ViewChild('input') input: ElementRef<HTMLInputElement> | undefined;
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  filteredOptions: string[];

  constructor() {
    this.filteredOptions = this.options.slice();
  }

 filter(): void {
  if (!this.input) return; // <-- Así evitas el error
  const filterValue = this.input.nativeElement.value.toLowerCase();
  this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
}

}
