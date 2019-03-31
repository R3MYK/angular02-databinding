import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular02-databinding';
  // Interpolación
  titulo: any = "Hola mundo codigo interactivo";
  datos: any = {nombre: "Nicolas", Apellido: "Martinez", Edad: 30, Documento: "17059331-6"};
}
