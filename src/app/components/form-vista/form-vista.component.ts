import { Component } from '@angular/core';
import { Registro } from '../registro';

@Component({
  selector: 'app-form-vista',
  templateUrl: './form-vista.component.html',
  styleUrls: ['./form-vista.component.css']
})
export class FormVistaComponent {

  estudiantes:any = [
    {
      nombre: 'Juan',
      apellidos: 'Perez',
      carrera: 'Ingeniería'
    },
    {
      nombre: 'Maria',
      apellidos: 'Gonzalez',
      carrera: 'Derecho'}
  ];

  datos: Registro = {
    nombre: '',
    apellidos:'',
    carrera:''
  }



  onSubmit() {
      this.estudiantes.push(this.datos);
      console.log(this.estudiantes)
    }

    limpiar(){
      this.datos={
        nombre:'',
        apellidos:'',
        carrera:''
      }
    }

}
