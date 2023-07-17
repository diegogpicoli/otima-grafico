export type User = {
  id?: number;
  email: string;
  password: string;
};

export type Relatorio = {
  semana: string;
  quantidade: number;
  totalVendido: number;
};

export type Mes = {
  id: number;
  mes: string;
  relatorio: Relatorio[];
};
