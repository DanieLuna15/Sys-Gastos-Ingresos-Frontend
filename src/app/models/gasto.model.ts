export interface Gasto{
  id: number;
  tipo: string;
  monto: number;
  descripcion: string;
  fecha_gasto: string;
  created_at?: string;
  updated_at?: string;
}
