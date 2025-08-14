import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductosService {
  private API = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.API).pipe(map(res => Array.isArray(res) ? res : []));
  }

  getProducto(id: string | number): Observable<any> {
    return this.http.get<any>(`${this.API}/${id}`);
  }

  createProducto(producto: any): Observable<any> {
    const payload = {
      nombre: producto?.nombre ?? '',
      descripcion: producto?.descripcion ?? '',
      precio: Number(producto?.precio) || 0,
      stock: Number(producto?.stock) || 0,
      imagen: producto?.imagen ?? ''
    };
    return this.http.post<any>(this.API, payload);
  }

  updateProducto(id: string | number, producto: any): Observable<any> {
    const payload = {
      id,
      nombre: producto?.nombre ?? '',
      descripcion: producto?.descripcion ?? '',
      precio: Number(producto?.precio) || 0,
      stock: Number(producto?.stock) || 0,
      imagen: producto?.imagen ?? ''
    };
    return this.http.put<any>(`${this.API}/${id}`, payload);
  }

  deleteProducto(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}