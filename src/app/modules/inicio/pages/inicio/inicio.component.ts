import { Component } from '@angular/core';
//importamos desde la interfaz
import { Jugador } from 'src/app/module/jugador';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public info: Jugador[];
  constructor(){
    this.info=[
      {
        id: "",
        nombre:"julian",
        equipo:"river",
        edad:23,
        imagen:"https://economis.com.ar/wp-content/uploads/2022/01/julian-alvarez.jpg",
        alt:"imagen",
      },

      {
        id: "",
        nombre:"enzo",
        equipo:"river",
        edad:23,
        imagen:"https://pasionmonumental.com/wp-content/uploads/2022/04/Enzo-Fernandez-4-vs-Fortaleza_PM-1.jpg",
        alt:"imagen",
      },

      {
        id: "",
        nombre:"juanfer",
        equipo:"river",
        edad:23,
        imagen:"https://storage.googleapis.com/diariodemocracia/cache/be/e6/8492bc624bd911e9a2d3021976ae6e73.jpg",
        alt:"imagen",
      }
    ]
  }

}
