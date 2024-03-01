import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gasto } from '../models/gasto.model';

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  private readonly API_URL = 'http://127.0.0.1:8000/api'
  constructor(
    private http: HttpClient
  ) { }

  getGastos(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(`${this.API_URL}/gastos`);
  }

  getGasto(id: number): Observable<Gasto> {
    return this.http.get<Gasto>(`${this.API_URL}/gastos/${id}`);
  }

  createGasto(data: Gasto): Observable<Gasto> {
    return this.http.post<Gasto>(`${this.API_URL}/gastos`, data);
  }

  updateGasto (id: number, data: Gasto): Observable<Gasto> {
    return this.http.put<Gasto>(`${this.API_URL}/gastos/${id}`, data);
  }

  deleteGasto(id: number): Observable<Gasto> {
    return this.http.delete<any>(`${this.API_URL}/gastos/${id}`);
  }
}
