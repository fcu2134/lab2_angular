import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FormularioService {
url_backend = environment.url_backend+"/registroForm"
  constructor(private http:HttpClient) { }

Crear_dtos_form(datosformu:any) {
return this .http.post('${this.url_backend}/crear_registro',datosformu);
console.log(datosformu);
}

}



