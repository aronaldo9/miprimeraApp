import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  // template: '<p>Aquí iría un empleado</p>',
  styleUrls: ['./empleado.component.css'],
  // styles: ['p{background-color: red;}'],
})
export class EmpleadoComponent implements OnInit {
  nombre = 'Aarón';
  apellido = 'Pesqueira';
  edad = 45;
  // private edad = 45;
  // empresa = 'Google';

  // getEdad() {
  //   return this.edad;
  // }

  habilitacionCuadro = false;

  usuarioRegistrado = false;

  getRegistroUsuario() {
    this.usuarioRegistrado = false;
  }

  setUsuarioRegistrado() {
    alert('Usuario registrado');
  }

  constructor() {}

  ngOnInit(): void {}
}
