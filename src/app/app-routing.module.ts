import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';


const routes: Routes = [
  //{path:"inicio", component:InicioComponent},
 // {path:"galeria", component:GaleriaComponent},
  {path:"",component:InicioComponent},
  {path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)},
  {path:"",loadChildren:()=>import('./modules/producto/producto.module').then(m=>m.ProductoModule)},
  {path:"",loadChildren:()=>import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
