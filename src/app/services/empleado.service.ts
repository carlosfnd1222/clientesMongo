import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //baseUri: string = 'https://empleadosds02-carlos.herokuapp.com/api';
  baseUri: string = 'https://localhost:4000/api';
  headers = new HttpHeaders().set('Content.Type','application/json');

  constructor(private http:HttpClient) { }

  //Método para agregar un nuevo empleado
  agregarEmpleado(data):Observable<any>{
    let url = `${this.baseUri}/create`;
    return this.http.post(url,data).pipe(catchError(this.errorManagement));
  }

  //Método para obtener todos los empleados registrados
  getEmpleados(){
    let url = `${this.baseUri}/empleados`;
    return this.http.get(url);
  }
  //Método para obtener un solo empleado por su ID
  getEmpleado(id):Observable<any>{
    let url = `${this.baseUri}/empleado/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response)=>{
        return res || {};
      }),
      catchError(this.errorManagement)
    );
  }

  //Método para actualizar un empleado
  updateEmpleado(id, data):Observable<any>{
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url,data,{headers: this.headers}).pipe(
      catchError(this.errorManagement)
    )
  }
  //Método para eliminar un empleado
  deleteEmpleado(id):Observable<any>{
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url,{headers: this.headers}).pipe(
      catchError(this.errorManagement)
    )  
  }

  //Manejador de errores
  errorManagement(error: HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      //obtenemos el error del lado del cliente
      errorMessage = error.error.message;
    }else{
      //obtenemos el error del lado del servidor
      errorMessage = `Código de error: ${error.status} \nMensaje: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
