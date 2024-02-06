import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// trabajar con formularios reactivos.
import {ReactiveFormsModule} from '@angular/forms';

// trabajar con peticiones http
import {HttpClientModule} from '@angular/common/http';

// trabajar con tablas de Material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

// trabajar con controles de formularios de material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; // se debe usar con el datepicker
import { MomentDateModule } from '@angular/material-moment-adapter';

// trabajar con mensajes de alerta.
import {MatSnackBarModule} from '@angular/material/snack-bar';

// trabajar con los íconos
import {MatIconModule} from '@angular/material/icon';

// trabajar con modales
import {MatDialogModule} from '@angular/material/dialog';

// trabajar con cuadrículas
import {MatGridListModule} from '@angular/material/grid-list';
import { DialogAddEditComponen } from './Dialogs/dialog-add-edit/dialog-add-edit.component';
import { DialogoDeleteComponent } from './Dialogs/dialogo-delete/dialogo-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogAddEditComponen,
    DialogoDeleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
