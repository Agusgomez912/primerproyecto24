import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductosComponent } from './pages/productos/productos.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
import { CaracteristicasComponent } from './pages/caracteristicas/caracteristicas.component';

import { EquiposActualesComponent } from './pages/equipos-actuales/equipos-actuales.component';
import { TemporadaComponent } from './pages/temporada/temporada.component';


@NgModule({
  declarations: [
    ProductosComponent,
    JugadoresComponent,
    CaracteristicasComponent,
   
    EquiposActualesComponent,
    TemporadaComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
