export interface User {
  $key: string;
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  funcao: string;
}

export interface Order {
  id: string;
  description:string;
}