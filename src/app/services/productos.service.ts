import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private API_PRODUCTOS = 'http://localhost:8081/productos';

  constructor(private http: HttpClient) { }

  // 🟢 Guardar producto
  postProducto(producto: any): Observable<any> {
    return this.http.post(this.API_PRODUCTOS, producto);
  }

  // 🟢 Listar productos
  getProductos(): Observable<any> {
    return this.http.get(this.API_PRODUCTOS);
  }

  // 🟢 Buscar por ID
  getProductoById(id: string): Observable<any> {
    return this.http.get(`${this.API_PRODUCTOS}/${id}`);
  }

  // 🟢 Actualizar producto
  putProducto(id: string, producto: any): Observable<any> {
    return this.http.put(`${this.API_PRODUCTOS}/${id}`, producto);
  }

  // 🟢 Eliminar producto
  deleteProducto(id: string): Observable<any> {
    return this.http.delete(`${this.API_PRODUCTOS}/${id}`);
  }
}