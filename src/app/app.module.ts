import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearEmpleadoComponent } from './pages/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './pages/editar-empleado/editar-empleado.component';
import { ListarEmpleadosComponent } from './pages/listar-empleados/listar-empleados.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpleadoService } from './services/empleado.service';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearEmpleadoComponent,
    EditarEmpleadoComponent,
    ListarEmpleadosComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
