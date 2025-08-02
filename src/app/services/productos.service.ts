import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  private API_PRODUCTOS = 'https://mr-prueba-default-rtdb.firebaseio.com/'

  postProductos(producto: any): Observable<any> {
    return this.http.post(`${this.API_PRODUCTOS}/productos.json`, producto)
  }

  getProductos(): Observable<any> {
    return this.http.get(`${this.API_PRODUCTOS}/productos.json`)
  }

  getProductoById(id: string): Observable<any> {
    return this.http.get(`${this.API_PRODUCTOS}/productos/${id}.json`)
  }

  deleteProducto(id: string): Observable<any> {
    return this.http.delete(`${this.API_PRODUCTOS}/productos/${id}.json`)
  }

  putProducto(id: string, producto: any): Observable<any> {
    return this.http.put(`${this.API_PRODUCTOS}/productos/${id}.json`, producto)
  }
}