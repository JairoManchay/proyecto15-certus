import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormVistaComponent } from './form-vista/form-vista.component';
import { FormsModule } from '@angular/forms';
import { FormListadoComponent } from './form-listado/form-listado.component';



@NgModule({
  declarations: [
    FormVistaComponent,
    FormListadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FormVistaComponent,
    FormListadoComponent
  ]
})
export class ComponentsModule { }
