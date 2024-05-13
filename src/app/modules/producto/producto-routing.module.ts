import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { CaracteristicasComponent } from './pages/caracteristicas/caracteristicas.component';
import { EquiposActualesComponent } from './pages/equipos-actuales/equipos-actuales.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';

const routes: Routes = [
  {
    path:"producto",component:ProductosComponent
  },
  {
    path:"caracteristicas",component:CaracteristicasComponent
  },

  {path:"equipos-acuales",component:EquiposActualesComponent},

  {path:"jugadores",component:JugadoresComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
