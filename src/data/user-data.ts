import { User } from "../types/user";

export const users = [
    { id: 1, email: 'usuario1@otimagestao.com', password: '123' },
    { id: 2, email: 'usuario2@otimagestao.com', password: '123' },
    { id: 3, email: 'usuario3@otimagestao.com', password: '123' },
];

export const fetchUser = (email: string, password: string) => {
    const result = users.filter((user: User) => user.email == email && user.password == password)
    return result
}