import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent,MatDialogTitle} from '@angular/material/dialog';

import { Empleado } from './Interfaces/empleado';
import { EmpleadoService } from './Services/empleado.service';
import { Departamento } from './Interfaces/departamento';
import { DepartamentoService } from './Services/departamento.service';
import { DialogAddEditComponen } from './Dialogs/dialog-add-edit/dialog-add-edit.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogoDeleteComponent } from './Dialogs/dialogo-delete/dialogo-delete.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit{
  displayedColumns: string[] = ['NombreCompleto', 'Departamento', 'Sueldo', 'FechaContrato','Acciones'];
  dataSource = new MatTableDataSource<Empleado>();
  //dataSource = new MatTableDataSource<Departamento>();

  constructor(
    private empleadoServicio: EmpleadoService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
    //private departamentoservicio: DepartamentoService
    ){

    }

    ngOnInit(): void {   // metodo para mostrar la info al inicio.
      this.mostrarEmpleados();
      //this.mostrardepartamentos();
    }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  // metodo para mostrar empleados
  mostrarEmpleados(){
    this.empleadoServicio.getList().subscribe({
      next:(dataResponse)=> {
        console.log(dataResponse)
        this.dataSource.data = dataResponse;
      },error:(e)=>{}      
    })
  }
  
/*
  mostrardepartamentos(){
    this.departamentoservicio.getList().subscribe({
      next:(dataResponse)=> {
        console.log(dataResponse)
        this.dataSource.data = dataResponse;
      },error:(e)=>{}      
    })
  }
*/
dialogoNuevoEmpleado() {
  this.dialog.open(DialogAddEditComponen,{
    disableClose: true,
    width: "350px"
  }).afterClosed().subscribe(resultado => {
    if(resultado === "creado"){
      this.mostrarEmpleados();
    }
  });  

}

dialogoEditarEmpleado(dataEmpleado: Empleado) {
  this.dialog.open(DialogAddEditComponen,{
    disableClose: true,
    width: "350px",
    data: dataEmpleado
  }).afterClosed().subscribe(resultado => {
    if(resultado === "editado"){
      this.mostrarEmpleados();
    }
  });  

}

mostrarAlerta(msg: string, accion: string) {
  this._snackBar.open(msg, accion,{
    horizontalPosition:"end",
    verticalPosition:"top",
    duration: 3000
  });
}

dialogoEliminarEmpleado(dataEmpleado : Empleado)
{
  this.dialog.open(DialogoDeleteComponent,{
    disableClose: true,    
    data: dataEmpleado
  }).afterClosed().subscribe(resultado => {
    if(resultado === "eliminar"){
      this.empleadoServicio.delete(dataEmpleado.idEmpleado).subscribe({
        next:(data)=>{
          this.mostrarAlerta("Empleado fue eliminado","listo");
          this.mostrarEmpleados();
        },
        error:(e) => {console.log(e)}
      });      
    }
  });
}


}



