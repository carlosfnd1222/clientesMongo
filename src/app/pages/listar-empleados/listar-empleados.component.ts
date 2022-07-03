import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {

  Empleados:any = [];

  constructor(private empleadoService: EmpleadoService) { 
    this.getEmpleados();
  }

  ngOnInit(): void {
  }

  //Méodo para obtener todos los empleados
  getEmpleados(){
    this.empleadoService.getEmpleados().subscribe((data) =>{
      this.Empleados = data;
    });
  }

  //Método para eliminar un empeado
  eliminarEmpleado(empleado, index){
    if(window.confirm('Estas seguro de borrar el registro')){
      this.empleadoService.deleteEmpleado(empleado._id).subscribe((data) =>{
        this.Empleados.suplice(index,1);
      });
    }
  }

}
