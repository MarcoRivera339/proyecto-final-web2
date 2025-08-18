import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Factura } from '../interfaces/factura';

@Injectable({ providedIn: 'root' })
export class FacturasService {
  private API = 'http://localhost:3000/facturas'; // Cambia la URL según tu backend

  constructor(private http: HttpClient) {}

  /**
   * Crea una nueva factura enviando los datos al backend
   * @param items Lista de productos con cantidad y precio
   * @param subtotal Subtotal de la factura
   * @param iva Valor del IVA
   * @param total Total final
   * @returns Factura creada
   */
  async crear(items: any[], subtotal: number, iva: number, total: number): Promise<Factura> {
    const payload = {
      fecha: new Date().toISOString(),
      items,
      subtotal,
      iva,
      total
    };

    try {
      const res = await firstValueFrom(this.http.post<Factura>(this.API, payload));
      return res;
    } catch (error) {
      console.error('Error al crear factura:', error);
      throw error;
    }
  }

  /**
   * Obtiene todas las facturas
   * @returns Lista de facturas
   */
  async getAll(): Promise<Factura[]> {
    try {
      const res = await firstValueFrom(this.http.get<Factura[]>(this.API));
      return res;
    } catch (error) {
      console.error('Error al obtener facturas:', error);
      throw error;
    }
  }
}