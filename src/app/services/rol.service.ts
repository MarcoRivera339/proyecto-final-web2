import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private API_ROLES = 'http://localhost:8081/roles';
  
    constructor(private http: HttpClient) { }

    // Listar todos los roles
      getRoles(): Observable<any> {
        return this.http.get(`${this.API_ROLES}`);
      }
}