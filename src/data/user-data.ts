import { User } from "../types/user";

export const users = [
  { id: 1, email: "user1@gmail.com", password: "123" },
  { id: 2, email: "user2@gmail.com", password: "123" },
  { id: 3, email: "user3@gmail.com", password: "123" },
];

export const database = [
  {
    id: 1,
    mes: "Janeiro",
    relatorio: [
      {
        semana: "1ªSemana",
        quantidade: 120,
        totalVendido: 12000,
      },
      {
        semana: "2ªSemana",
        quantidade: 80,
        totalVendido: 8000,
      },
      {
        semana: "3ªSemana",
        quantidade: 130,
        totalVendido: 13000,
      },
      {
        semana: "4ªSemana",
        quantidade: 40,
        totalVendido: 4000,
      },
    ],
  },
  {
    id: 2,
    mes: "Fevereiro",
    relatorio: [
      {
        semana: "1ªSemana",
        quantidade: 100,
        totalVendido: 10000,
      },
      {
        semana: "2ªSemana",
        quantidade: 90,
        totalVendido: 9000,
      },
      {
        semana: "3ªSemana",
        quantidade: 110,
        totalVendido: 11000,
      },
      {
        semana: "4ªSemana",
        quantidade: 70,
        totalVendido: 7000,
      },
    ],
  },
  {
    id: 3,
    mes: "Março",
    relatorio: [
      {
        semana: "1ªSemana",
        quantidade: 150,
        totalVendido: 15000,
      },
      {
        semana: "2ªSemana",
        quantidade: 70,
        totalVendido: 7000,
      },
      {
        semana: "3ªSemana",
        quantidade: 120,
        totalVendido: 12000,
      },
      {
        semana: "4ªSemana",
        quantidade: 80,
        totalVendido: 8000,
      },
    ],
  },
  {
    id: 4,
    mes: "Abril",
    relatorio: [
      {
        semana: "1ªSemana",
        quantidade: 90,
        totalVendido: 9000,
      },
      {
        semana: "2ªSemana",
        quantidade: 60,
        totalVendido: 6000,
      },
      {
        semana: "3ªSemana",
        quantidade: 110,
        totalVendido: 11000,
      },
      {
        semana: "4ªSemana",
        quantidade: 50,
        totalVendido: 5000,
      },
    ],
  },
  {
    id: 5,
    mes: "Maio",
    relatorio: [
      {
        semana: "1ªSemana",
        quantidade: 130,
        totalVendido: 13000,
      },
      {
        semana: "2ªSemana",
        quantidade: 80,
        totalVendido: 8000,
      },
      {
        semana: "3ªSemana",
        quantidade: 140,
        totalVendido: 14000,
      },
      {
        semana: "4ªSemana",
        quantidade: 70,
        totalVendido: 7000,
      },
    ],
  },
  {
    id: 6,
    mes: "Junho",
    relatorio: [
      {
        semana: "1ªSemana",
        quantidade: 110,
        totalVendido: 11000,
      },
      {
        semana: "2ªSemana",
        quantidade: 90,
        totalVendido: 9000,
      },
      {
        semana: "3ªSemana",
        quantidade: 130,
        totalVendido: 13000,
      },
      {
        semana: "4ªSemana",
        quantidade: 80,
        totalVendido: 8000,
      },
    ],
  },
  {
    id: 7,
    mes: "Julho",
    relatorio: [
      {
        semana: "1ªSemana",
        quantidade: 100,
        totalVendido: 10000,
      },
      {
        semana: "2ªSemana",
        quantidade: 70,
        totalVendido: 7000,
      },
      {
        semana: "3ªSemana",
        quantidade: 120,
        totalVendido: 12000,
      },
      {
        semana: "4ªSemana",
        quantidade: 60,
        totalVendido: 6000,
      },
    ],
  },
  {
    id: 8,
    mes: "Agosto",
    relatorio: [
      {
        semana: "1ªSemana",
        quantidade: 120,
        totalVendido: 12000,
      },
      {
        semana: "2ªSemana",
        quantidade: 80,
        totalVendido: 8000,
      },
      {
        semana: "3ªSemana",
        quantidade: 130,
        totalVendido: 13000,
      },
      {
        semana: "4ªSemana",
        quantidade: 70,
        totalVendido: 7000,
      },
    ],
  },
  {
    id: 9,
    mes: "Setembro",
    relatorio: [
      {
        semana: "1ªSemana",
        quantidade: 90,
        totalVendido: 9000,
      },
      {
        semana: "2ªSemana",
        quantidade: 60,
        totalVendido: 6000,
      },
      {
        semana: "3ªSemana",
        quantidade: 110,
        totalVendido: 11000,
      },
      {
        semana: "4ªSemana",
        quantidade: 50,
        totalVendido: 5000,
      },
    ],
  },
  {
    id: 10,
    mes: "Outubro",
    relatorio: [
      {
        semana: "1ªSemana",
        quantidade: 130,
        totalVendido: 13000,
      },
      {
        semana: "2ªSemana",
        quantidade: 80,
        totalVendido: 8000,
      },
      {
        semana: "3ªSemana",
        quantidade: 140,
        totalVendido: 14000,
      },
      {
        semana: "4ªSemana",
        quantidade: 70,
        totalVendido: 7000,
      },
    ],
  },
  {
    id: 11,
    mes: "Novembro",
    relatorio: [
      {
        semana: "1ªSemana",
        quantidade: 110,
        totalVendido: 11000,
      },
      {
        semana: "2ªSemana",
        quantidade: 90,
        totalVendido: 9000,
      },
      {
        semana: "3ªSemana",
        quantidade: 130,
        totalVendido: 13000,
      },
      {
        semana: "4ªSemana",
        quantidade: 80,
        totalVendido: 8000,
      },
    ],
  },
  {
    id: 12,
    mes: "Dezembro",
    relatorio: [
      {
        semana: "1ªSemana",
        quantidade: 10,
        totalVendido: 10000,
      },
      {
        semana: "2ªSemana",
        quantidade: 70,
        totalVendido: 7000,
      },
      {
        semana: "3ªSemana",
        quantidade: 120,
        totalVendido: 12000,
      },
      {
        semana: "4ªSemana",
        quantidade: 60,
        totalVendido: 6000,
      },
    ],
  },
];


export const fetchUser = (email: string, password: string) => {
  const result = users.filter(
    (user: User) => user.email == email && user.password == password
  );
  return result;
};

export const fetchData = () => {
  return database
}