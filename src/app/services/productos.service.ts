import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductosService {
  
  private API_PRODUCTOS = 'http://localhost:8081/productos';

  constructor(private http: HttpClient) { }

  // Guardar producto
  postProducto(producto: any): Observable<any> {
    return this.http.post(`${this.API_PRODUCTOS}/guardarProducto`, producto);
  }

  // Listar todos los productos
  getProductos(): Observable<any> {
    return this.http.get(`${this.API_PRODUCTOS}`);
  }

  // Buscar producto por ID
  getProductoById(id: string): Observable<any> {
    return this.http.get(`${this.API_PRODUCTOS}/${id}`);
  }

  // Buscar producto por codigo
  getProductoByCodigo(codigo: string): Observable<any> {
    return this.http.get(`${this.API_PRODUCTOS}/codigo/${codigo}`);
  }

  // Eliminar producto
  deleteProducto(id: string): Observable<any> {
    return this.http.delete(`${this.API_PRODUCTOS}/eliminarProducto/${id}`);
  }

  // Actualizar producto
  putProducto(id: string, producto: any): Observable<any> {
    return this.http.put(`${this.API_PRODUCTOS}/editarProducto/${id}`, producto);
  }
}