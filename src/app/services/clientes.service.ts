import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  private API_CLIENTES = 'https://mr-prueba-default-rtdb.firebaseio.com/'

  postCliente(cliente: any): Observable<any> {
    return this.http.post(`${this.API_CLIENTES}/clientes.json`, cliente)
  }

  getClientes(): Observable<any> {
    return this.http.get(`${this.API_CLIENTES}/clientes.json`)
  }

  getClienteById(id: string): Observable<any> {
    return this.http.get(`${this.API_CLIENTES}/clientes/${id}.json`)
  }

  deleteCliente(id: string): Observable<any> {
    return this.http.delete(`${this.API_CLIENTES}/clientes/${id}.json`)
  }

  putCliente(id: string, cliente: any): Observable<any> {
    return this.http.put(`${this.API_CLIENTES}/clientes/${id}.json`, cliente)
  }
}
