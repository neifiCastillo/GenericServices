import { Injectable } from '@angular/core';
import { Usuario } from '../Interfaces/user-interface';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericService<Usuario> {
	GetResourceUrl(): string {
		return 'users'; 

   }

  constructor(protected override $http: HttpClient) {
    super($http);
   }
}
