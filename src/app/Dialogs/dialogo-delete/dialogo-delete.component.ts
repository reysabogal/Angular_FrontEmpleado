import { Component, OnInit,Inject } from '@angular/core'; // Inject es para recibir datos
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; // MAT_DIALOG para editar
import { Empleado } from 'src/app/Interfaces/empleado';

@Component({
  selector: 'app-dialogo-delete',
  templateUrl: './dialogo-delete.component.html',
  styleUrls: ['./dialogo-delete.component.css']
})
export class DialogoDeleteComponent {

  constructor(
    private dialogoReferencia: MatDialogRef<DialogoDeleteComponent>,    
    @Inject (MAT_DIALOG_DATA) public dataEmpleado: Empleado // se usa para recibir la data al eliminar
  )
  {}

  confirmar_eliminar(){
    if(this.dataEmpleado)
    {
      this.dialogoReferencia.close("eliminar")
    }
  }
}
