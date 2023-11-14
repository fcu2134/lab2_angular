import { Component, OnInit } from '@angular/core';
import { FormularioService } from 'src/app/services/formulario.service';
import { FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit {
  datosformu:any
  registro:any
  registro_enviar={
    campo1:null,
    campo2:null
  }
  registros:any;
    constructor(private fb: FormBuilder, private ServiceFormulario: FormularioService) {
  
      this.ServiceFormulario.Crear_dtos_form(this.datosformu.value).subscribe(
        (response: any) => {
          // Este bloque de código se ejecuta cuando la solicitud es exitosa
          if (response.registro) {
            alert('datos guardados');
            console.log(response);
          } else {
            alert('datos no guardados ');
          }
        },
        (error) => {
          // Este bloque de código se ejecuta si hay un error
          alert('error al registrar ');
        }
      );
      }   
      ngOnInit(): void {
        
      } 
}
