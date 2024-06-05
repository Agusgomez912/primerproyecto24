import { Component } from '@angular/core';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide=true;
  
  public coleccionusuariolocales: Usuario[];


  usuarios: Usuario={
    uid:'santiago',
    nombre:'nuñez',
    apellido:'santinuñez@gmail.com',
    email:'admin',
    rol:'vis',
    password:'abc',

    iniciarsesion(){
      const credenciales={
        uid: this.usuarios.uid,
        nombre: this.usuarios.nombre,
        apellido: this.usuarios.apellido,
        email: this.usuarios.email,
        rol:this.usuarios.rol,
        password: this.usuario.rol,
      }
      for(let i =0; i < this.collecionusuarioslocales.length; i++)
    }
  }

}
