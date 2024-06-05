import { Component } from '@angular/core';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
   //input de la contraseña para ver los caracteres o no
  hide = true;

  usuarios: Usuario ={
    uid: '',
    nombre:'',
    apellido:'',
    email:'',
    password:'',
    rol:'',
  }
  //creamos una coleccion de usuarios tipo usuario para arrays
  coleccionusuarios: Usuario[]=[];

  registrar(){

 

  //funcion para el registro de nuevos usuarios
  const credenciales ={
    uid:this.usuarios.uid,
    nombre:this.usuarios.nombre,
    apellido:this.usuarios.apellido,
    email:this.usuarios.email,
    password:this.usuarios.password,
    rol:this.usuarios.rol,
  }

//enviamos la nueva informacion como un nuevo objeto a la coleccion
  this.coleccionusuarios.push(credenciales)

  console.log(credenciales);
  console.log(this.coleccionusuarios);
}

  // Función para vaciar los inputs del formulario
limpiarInputs(){
  const inputs={
    uid:this.usuarios.uid='',
    nombre:this.usuarios.nombre='',
    apellido:this.usuarios.apellido='',
    email:this.usuarios.email='',
    rol:this.usuarios.rol='',
    password:this.usuarios.password='',
  }
  //enviamos la nueva informacion como nuevo objeto
  this.coleccionusuarios.push(credenciales);

  alert("¡te registraste con exito!");

  this.limpiarInputs();

}
}
