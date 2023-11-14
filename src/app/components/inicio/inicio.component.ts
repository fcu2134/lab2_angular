import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormularioService } from 'src/app/services/formulario.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  datosformu:any;
  constructor(private fb:FormBuilder,private formularioService:FormularioService){}
    ngOnInit(): void {
      this.datosformu=this.fb.group({
        campo1:['',Validators.required],
        campo2:[''],
      })
    }
  }  
get formularioReactivo(){

  return this.datosformu.controls;
}