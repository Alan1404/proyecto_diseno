import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listEstudiantes: any[] = [
    {nombre: "Alan Daniel", estado: "Promocionado"},
    {nombre: "Luna Melanie", estado: "Regular"},
    {nombre: "Tania Angelly", estado: "Regular"},
    {nombre: "Maria Ferruzca", estado: "Promocionado"},
    {nombre: "Salvador Anguiano", estado: "Libre"}
  ]

  mostrar = true;

  toogle(): void {
    this.mostrar = !this.mostrar
  }
}