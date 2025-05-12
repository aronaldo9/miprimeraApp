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
  empresa = 'AaronPFDev';

  // getEdad() {
  //   return this.edad;
  // }

  habilitacionCuadro = false;

  usuarioRegistrado = false;

  textoDeRegistro = 'No hay ningún usuario registrado';

  getRegistroUsuario() {
    this.usuarioRegistrado = false;
  }

  setUsuarioRegistrado(event: Event) {
    // alert('Usuario registrado');

    // this.textoDeRegistro = 'El usuario se acaba de registrar';

    if ((<HTMLInputElement>event.target).value === 'si') {
      this.textoDeRegistro = 'El usuario se acaba de registrar';
    } else {
      this.textoDeRegistro = 'No hay ningún usuario registrado';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
