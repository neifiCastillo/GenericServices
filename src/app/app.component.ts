import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './Interfaces/user-interface';
import { UsuarioService } from './services/usuario.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // usuarios = this.usuarioServices.listOfType$;
     usuarios: Usuario [] = [];

  
  constructor( public usuarioServices: UsuarioService) {}
  
  ngOnInit(){
    this.GetUsuario();
  }

   GetUsuario(){
      this.usuarioServices.GetAll()
      .subscribe( (rest:Usuario[]) => {
        this.usuarios = rest;
      })

   }

   GetbyUsuario( id : number ) {
     
    this.usuarioServices.GetById(id)
    .subscribe(rest => {
      console.log(rest);
    })

   }



}
