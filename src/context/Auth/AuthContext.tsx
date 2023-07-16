import { createContext, useState } from "react";
import { User } from "../../types/user";
import { fetchUser } from "../../data/user-data";

export type ContextType = {
  user: User | null;
  loginIn: (email: string, password: string) => boolean;
  logout: () => void;
};

export const AuthContext = createContext<ContextType>(null!);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);

  const loginIn = (email: string, password: string) => {
    const result = fetchUser(email, password);

    if (result.length > 0) {
      return true;
    }
    return false;
  };

  const logout = async () => {};
  return (
    <AuthContext.Provider value={{ user, loginIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
