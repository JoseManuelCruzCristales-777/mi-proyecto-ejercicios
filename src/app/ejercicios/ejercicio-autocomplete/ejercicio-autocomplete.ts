import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

// Importaciones para Angular Material y otros módulos necesarios
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router'; // Para el botón de volver

@Component({
  selector: 'app-ejercicio-autocomplete',
  standalone: true,
  // En los componentes Standalone, las importaciones se hacen aquí
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './ejercicio-autocomplete.html',
  styleUrl: './ejercicio-autocomplete.css'
})
export class EjercicioAutocompleteComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}