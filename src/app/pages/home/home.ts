import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- IMPORTANTE para routerLink

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class HomeComponent {}
