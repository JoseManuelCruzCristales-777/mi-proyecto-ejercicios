import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { EjercicioAutocompleteComponent } from './ejercicios/ejercicio-autocomplete/ejercicio-autocomplete';
import { AutocompleteDisplayExample } from './ejercicios/ejercicio2/ejercicio2';
import { AutocompleteFilterExample } from './ejercicios/ejercicio3/ejercicio3';
import { AutocompleteOptgroupExample } from './ejercicios/ejercicio4/ejercicio4';
import { AutocompleteOverviewExample } from './ejercicios/ejercicio5/ejercicio5';
import { AutocompletePlainInputExample } from './ejercicios/ejercicio6/ejercicio6';
import { AutocompleteRequireSelectionExample } from './ejercicios/ejercicio7/ejercicio7';
import { AutocompleteSimpleExample } from './ejercicios/ejercicio8/ejercicio8';
import { AutocompleteOptgroupExample2 } from './ejercicios/ejercicio9/ejercicio9';
import { AutocompleteSimpleExample2 } from './ejercicios/ejercicio10/ejercicio10';
import { DialogOverviewExample } from './ejercicios/ejercicio11/ejercicio11';
import{DividerOverviewExample} from './ejercicios/ejercicio12/ejercicio12';
import { CardFooterExample } from './ejercicios/ejercicio13/ejercicio13';
import { BadgeOverviewExample } from './ejercicios/ejercicio14/ejercicio14';
import { DatepickerOverviewExample } from './ejercicios/ejercicio15/ejercicio15';
export const routes: Routes = [
    // Redirige la ruta raíz a '/inicio'
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },

    // Ruta para la página de inicio
    { path: 'inicio', component: HomeComponent },

    // Ruta para tu primer ejercicio
    { path: 'ejercicio-autocomplete', component: EjercicioAutocompleteComponent },
    { path: 'ejercicio2', component: AutocompleteDisplayExample },
    { path: 'ejercicio3', component: AutocompleteFilterExample },
    { path: 'ejercicio4', component: AutocompleteOptgroupExample },
    { path: 'ejercicio5', component: AutocompleteOverviewExample },
    { path: 'ejercicio6', component: AutocompletePlainInputExample },
    { path: 'ejercicio7', component: AutocompleteRequireSelectionExample },
    { path: 'ejercicio8', component: AutocompleteSimpleExample },
    { path: 'ejercicio9', component: AutocompleteOptgroupExample2 },
    { path: 'ejercicio10', component: AutocompleteSimpleExample2 },
    { path: 'ejercicio11', component: DialogOverviewExample },
    { path: 'ejercicio12', component: DividerOverviewExample },
    { path: 'ejercicio13', component: CardFooterExample },
     { path: 'ejercicio14', component: BadgeOverviewExample },
     { path: 'ejercicio15', component: DatepickerOverviewExample },
]