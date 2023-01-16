import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-listado',
  templateUrl: './form-listado.component.html',
  styleUrls: ['./form-listado.component.css']
})
export class FormListadoComponent {
  @Input() componentePadre:any[]=[];


  eliminarDatos(numero: number){
    let confirmacion = confirm('¿Deseas eliminar?');
    if(confirmacion){
      this.componentePadre.splice(numero, 1);
    }
  }
}
